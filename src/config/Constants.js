export const nameRegex = /^[a-z]+$/i;
export const passwordRegex = /^[\S]{8,}$/;
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const baseURL = 'https://www.googleapis.com/youtube/v3';
export const categoryNames = ['Game', 'Funny Videos', 'Series', 'Music', 'Movies'];
export const label = {
       appName: "YouTube Video Search",
       loginFirst: "Please Login First To Access this page",
       loginSuccessful: "Login Successful",
       signupValidationMsg: "Please Enter Valid Details",
       signUpSuccess: "Sign up Successful",
       addToWatchLater: "Video added to the watch later",
       removeFromWatchLater: "Video removed from watch later",
       removeFromHistory: "Video removed from history",
       loginValidationMsg: "Please Enter valid Email and Password",
}