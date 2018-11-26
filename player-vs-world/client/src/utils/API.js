import axios from "axios";
import Auth from "./auth"

export default {
  // Gets all Messages
  getMessages: (userInfo) => {
    console.log(Auth.getToken())
    return axios.post("/api/mail/receiver",userInfo,{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },
  // <------------------------------------>
  // Gets a single message by ID
  getMessage: (messageId) => {
    return axios.put("/api/mail/get", messageId,{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },
  // <------------------------------------>
  //sending a message
  sendMessage: (message) => {
    console.log("this is the token yo",Auth.getToken())
    return axios.post("/api/mail/send", message,{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },
  // <------------------------------------>
  // DELETE route for deleting sent mail
  deleteSent: (deletes) => {
    return axios.put("/api/mail/senderDelete", deletes,{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },
  deleteReciever: (deletes) => {
    return axios.put("/api/mail/receiverDelete", deletes,{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },
  // <------------------------------------>
  //sent mail
  mailSender: (messages) => {
    return axios.put("/api/mail/sender", messages,{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },
  // <------------------------------------>
  // friend routes
  friendAdd: (friend) => {
    return axios.post("/api/users/friendAdd", friend,{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },
  friendfind: (friend) => {
    console.log( "this is frined ajskdlf;jaskdlf;j ", friend)
    return axios.post("/api/users/friendFind", friend,{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },


  // <------------------------------------>
  // group routes
  groupAdd: (group) => {
    return axios.post("/api/users/groupAdd", group,{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },
  groupFind: (groups) => {
    return axios.post("/api/users/groupFind", { user: groups },{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },
  // <------------------------------------>
  // game routes
  gamesAdd: (games) => {
    return axios.post("/api/users/gamesAdd", games,{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },
  gamesFind: (games) => {
    return axios.post("/api/users/gamesFind", { user: games },{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },
  // <------------------------------------>
  // blog routes
  blogAdd: (blogs) => {
    return axios.post("/api/blogs/addBlogs", blogs,{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },
  blogFind: () => {
    return axios.get("/api/blogs/getBlogs",{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },
  // <------------------------------------>
  // make a user route
  newUser: (User) => {
    return axios.post("/api/newUser", User,{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  },
  whoAmI: () => {
    return axios.get("/api/me",{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  }
};