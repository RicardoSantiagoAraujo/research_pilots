#Install and open tidyverse package
#install.packages("tidyverse")
library(tidyverse)
library(dplyr)

#Open data
data <-read.csv("C:/Users/ricar/Dropbox/PhD/1-PROJECTS/Human Experiment/Pilot results/2020-10-27 PILOT DATA.csv", sep = "," )

#Create new column "Date" with the Unix timestamps converted to readable dates
for (i in 1: length(data$data.timestamp)) {
  data$Date[i] <- as.character(as.Date(as.POSIXct(data$data.timestamp[i]/1000, origin="1970-01-01")))
}

#00000000
#0000000000000
#remove any undesired data 
data <- subset(data, data.timestamp > 1.603439e+12) #this one removes data from earlier than a specific date
data<-data.male <-subset(data, data$data.userGender == "male") # this one takes only males
data<-data.female <-subset(data, data$data.userGender == "female") #this one takes only females
#0000000000000


######
###################
#Start by tidying up the data frame
###################
######

#Simplify data so we only keep the mate choices and genders and user IDs
data.simple <- data[, -c(2:15,18:31)]

#Convert factors to characters
i <- sapply(data.simple, is.factor)
data.simple[i] <- lapply(data.simple[i], as.character)


#Cut open the data.mateChoices variable
data.open <-separate(data.simple,
                       data.mateChoices,
                       c("trial1","trial2","trial3","trial4","trial5","trial6","trial7","trial8","trial9","trial10"),
                       sep="},{")


#Separate Trials and open them
for (i in  1: (ncol(data.open)-2)) {
  #First eparate intro trials
  a<-assign(paste0("Trial", i),data.open[i+2]) 
  a["X_id"]<-data.open["X_id"] #adds the participant IDs so as to keep track of them
  a["Trial_number"]<-paste0("Trial",i) #adds the participant IDs so as to keep track of them
  #Then take each trial and open up the data
  a<-assign(paste0("Trial", i),separate(a,
                                     paste0("trial",i),
                                     c("Pair_ID","Left_Rate","Right_Rate","CHOICE","MAJORITY","User_Agreement","Reaction_Time"),
                                     sep=","))
  #finally, clean it up by removing extra text from cells
  for (j in 1:7) { # 1:n where n is the number of columns
    a[,j] <- gsub(".*:","",a[,j])
    a[,j] <- gsub("}]","",a[,j])
    a[,j] <- gsub('"',"",a[,j])
    #assign(paste0("Trial", i,"[,j]"),gsub(".*:","",Trial1[,j]))
  }
  a<-assign(paste0("Trial", i),a)
}

######
#Create dataframe to collect all trial results together
results.by.trial <-data.frame(matrix(ncol = 5, nrow = 0))
colnames(results.by.trial) <- c("Trial","copy","not_copy","no_majority","percent.copy")


#Create a list with all the individual data frames to be able to use it in the loop
trialN<-1:(ncol(data.open)-2)
list_object_names = sprintf("Trial%s", 1:(ncol(data.open)-2))
list_DataFrame = lapply(list_object_names, get)

#loop to put count each individual trial's results and put them into the results dataframe
for (i in 1:(ncol(data.open)-2)) {
 results.by.trial[i,"Trial"] <-paste("Trial_",i)
 results.by.trial[i,"copy"] <-length(which(list_DataFrame[[i]]$User_Agreement == "true"))
 results.by.trial[i,"not_copy"] <-length(which(list_DataFrame[[i]]$User_Agreement == "false")) # attention: here tie cases (10:10) are still counted as not_copying because thats how they are coded by thewebsite, so they have to to subtracted
 results.by.trial[i,"no_majority"] <-length(which(list_DataFrame[[i]]$MAJORITY == "tie"))
 results.by.trial[i,"not_copy"] <-results.by.trial[i,"not_copy"]-results.by.trial[i,"no_majority"] #subtract tie cases from not_copy, as mentioned above
 results.by.trial[i,"percent.copy"] <- round(results.by.trial[i,"copy"]*100/(results.by.trial[i,"copy"]+results.by.trial[i,"not_copy"]), 1)
}

#Summary stats 
summary(results.by.trial["percent.copy"])
plot(results.by.trial$percent.copy,
       xlab = "Trial number",
       ylab = "percentage that copies",
       main = "Copy rate for each of the 10 trials",
       ylim=c(ymin=0, ymax=100)
     )
abline(a=50, b=0,col="grey",lty=2)

######## 
#################################
#Join all the trial data together into a single data frame
merged.data = Reduce(function(...) merge(..., all=T), list_DataFrame)
################################

#Do stats on these
results <-data.frame(matrix(ncol = 4, nrow = 0))
colnames(results) <- c("copy","not_copy","no_majority","percent.copy")
results[1,"copy"] <-length(which(merged.data$User_Agreement == "true"))
results[1,"not_copy"] <-length(which(merged.data$User_Agreement == "false")) # attention: here tie cases (10:10) are still counted as not_copying because thats how they are coded by thewebsite, so they have to to subtracted
results[1,"no_majority"] <-length(which(merged.data$MAJORITY == "tie"))
results[1,"not_copy"] <-results[1,"not_copy"]-results[1,"no_majority"] #subtract tie cases from not_copy, as mentioned above
results[1,"percent.copy"] <- round(results[1,"copy"]*100/(results[1,"copy"]+results[1,"not_copy"]), 1) #it is not exactly the same as the average in the summary for results.by.trial because there we do the rounding in a different step, which changes the result slightly

#Calculate copying rate for each social info ratio
results.by.rate <-data.frame(matrix(ncol = 5, nrow = 0))
colnames(results.by.rate) <- c("Left_Rate","copy","not_copy","no_majority","percent.copy")
for (i in 0:20){
  results.by.rate[i+1,"Left_Rate"] <- i # +1 because otherwise it would start from 1
  a<-subset(merged.data, merged.data$Left_Rate == i)
  results.by.rate[i+1,"copy"] <-length(which(a$User_Agreement == "true"))
  results.by.rate[i+1,"not_copy"] <-length(which(a$User_Agreement == "false")) # attention: here tie cases (10:10) are still counted as not_copying because thats how they are coded by thewebsite, so they have to to subtracted
  results.by.rate[i+1,"no_majority"] <-length(which(a$MAJORITY == "tie"))
  results.by.rate[i+1,"not_copy"] <-results.by.rate[i+1,"not_copy"]-results.by.rate[i+1,"no_majority"] #subtract tie cases from not_copy, as mentioned above
  results.by.rate[i+1,"percent.copy"] <- round(results.by.rate[i+1,"copy"]*100/(results.by.rate[i+1,"copy"]+results.by.rate[i+1,"not_copy"]), 1) #it is not exactly the same as the average in the summary for results.by.trial because there we do the rounding in a different step, which changes the result slightly
}

########
#Lets create different plots to visualize the data

#Does the time it takes people to vote depend on the social info consensus?
plot(merged.data$Left_Rate,
     merged.data$Reaction_Time,
     xlab = "Left picture rating",
     ylab = "Time taken by participant to vote (milliseconds)",
     main = "Effect of majority consensus on Delay to vote",
)

# What kind of influence does the social info have on choice?
plot(x = results.by.rate$Left_Rate,
     y = results.by.rate$percent.copy,
     xlab = "Left picture rating",
     ylab = "Copying rate",
     main = "Left Picture Rating vs Copying Rate",
)
abline(a=50, b=0,col="grey",lty=2)
lines(x=c(0:20),y=abs(c(0:20)-10)*5+50, col="blue") #add lines of what it would look like with perfect copying

#Calculate statistics and R squared assuming a linear relationship on each side (like the blue lines)
linear.reg.leftarm <- lm(as.numeric(unlist(subset(results.by.rate, results.by.rate$Left_Rate < 10)["percent.copy"])) ~ as.numeric(unlist(subset(results.by.rate, results.by.rate$Left_Rate < 10)["Left_Rate"])))
summary(linear.reg.leftarm)$r.squared #R2 for left side
intercept.leftarm <- coef(linear.reg.leftarm)["(Intercept)"]
slope.leftarm <- coef(linear.reg.leftarm)[2]
clip(0,10,0,100)
abline(a=intercept.leftarm, b=slope.leftarm,col="red",lty=2)

linear.reg.rightarm <- lm(as.numeric(unlist(subset(results.by.rate, results.by.rate$Left_Rate > 10)["percent.copy"])) ~ as.numeric(unlist(subset(results.by.rate, results.by.rate$Left_Rate > 10)["Left_Rate"])))
summary(linear.reg.rightarm)$r.squared #R2 for right side
intercept.rightarm <- coef(linear.reg.rightarm)["(Intercept)"]
slope.rightarm <- coef(linear.reg.rightarm)[2]
clip(10,20,0,100)
abline(a=intercept.rightarm, b=slope.rightarm,col="red",lty=2)

#is there a left vs right bias?
left.choice.count<-length(which(merged.data$CHOICE == "left"))
right.choice.count<-length(which(merged.data$CHOICE == "right"))
left.choice.count/(right.choice.count+left.choice.count)

###

