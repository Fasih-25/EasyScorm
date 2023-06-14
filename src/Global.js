import React, { Component } from "react";
import axios from "axios";
export default class Global extends Component {
  static BaseURL = "http://localhost:3000/";

  static async postToAPI(url, type, postdata) {
    let headers;
    if (type === "simpleData") {
      // console.log("THIS IS simple form data");
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
    } else {
      // console.log("this is file form data");
      headers = {
        Accept: "*/*",
      };
    }
    // console.log(postdata);
    try {
      const response = await fetch(`${Global.BaseURL}${url}`, {
        method: "POST",
        headers: headers,
        body: postdata,
      });
      //   console.log(postdata);
      const responseData = await response.json();
      // console.log(responseData);
      return responseData;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async getAPI(url) {
    try {
      const response = await axios.get(`${Global.BaseURL}${url}`);
      const responseData = response.data;
      // console.log(responseData);
      return responseData;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async sendEmail(email, admin_id) {
    const paramData = JSON.stringify({ email: email, admin_id: admin_id });
    try {
      const response = await Global.postToAPI(
        "admin/send-email",
        "simpleData",
        paramData
      );
      if (response.message === "The link sent successfully.") {
        // console.log("THE SEND EMAIL RESPONSE", response.message);
        return response.message;
      } else {
        console.log("Something went wrong:", response);
        return response;
      }
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async copyLink(admin_id) {
    const paramData = JSON.stringify({ admin_id: admin_id });

    try {
      const response = await Global.postToAPI(
        "admin/copy-link",
        "simpleData",
        paramData
      );

      // console.log("THE COPY LINK RESPONSE", response.message);

      if (response.message === "Link copied to clipboard") {
        console.log("Link copied to clipboard", response.message);
        return response.message;
      } else {
        console.log("Something went wrong:", response);
        return response;
      }
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async getStudents(admin_id) {
    const paramData = JSON.stringify({ id: admin_id, role_id: 2 });

    try {
      const response = await Global.postToAPI(
        "user/get-students",
        "simpleData",
        paramData
      );
      //   console.log("THE GET STUDENT RESPONSE",response);
      return response;
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async handleBan(studentId, studentban) {
    const paramData = JSON.stringify({ id: studentId });
    let endpoint = "";
    if (studentban == 1) {
      endpoint = "admin/ban-student";
    } else {
      endpoint = "admin/unban-student";
    }
    try {
      const response = await Global.postToAPI(
        endpoint,
        "simpleData",
        paramData
      );
      //   console.log("HANDLE BAN RESPONSE", response);
      return response;
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async handleDeleteStudent(studentId) {
    const paramData = JSON.stringify({ id: studentId });
    try {
      const response = await Global.postToAPI(
        "admin/deactive-student",
        "simpleData",
        paramData
      );
      console.log("HANDLE DELETE RESPONSE", response);
      return response;
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async portalDetails(newFormData) {
    const links = {
      links: {
        facebook: newFormData.facebookLink,
        instagram: newFormData.instaLink,
        LinkedIn: newFormData.linkedInLink,
        Twitter: newFormData.twitterLink,
      },
    };
    const jsonString = JSON.stringify(links);

    let formData = new FormData();

    formData.append("user_id", newFormData.id);
    formData.append("portalTitle", newFormData.title);
    formData.append("logo", newFormData.logo);

    formData.append("profile_image", newFormData.picture);
    formData.append("full_name", newFormData.name);
    formData.append("about", newFormData.about);
    formData.append("email", newFormData.email);
    formData.append("social_links", jsonString);

    try {
      const response = await Global.postToAPI(
        "admin/portal-info",
        "FormData",
        formData
      );
      // console.log("THIS IS FORM SUBMISSION RESPONSE", response);
      return response;
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async getCourses(admin_id) {
    const paramData = JSON.stringify({ id: admin_id });

    try {
      const response = await Global.postToAPI(
        "user/owner-course",
        "simpleData",
        paramData
      );
        // console.log("THE GET courses RESPONSE",response);
      return response;
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async addCourse(item) {
    let formData = new FormData();

    formData.append("owner_id", item.id);
    formData.append("courseName", item.title);
    formData.append("courseDescription", item.description);

    formData.append("cover_image", item.picture);
    formData.append("zip_path", item.filezip);
    // console.log(formData)
    try {
      const response = await Global.postToAPI(
        "courses/add-course",
        "FormData",
        formData
      );
      // console.log("THIS IS ADD COURSE RESPONSE", response);
      return response;
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async deleteCourse(courseId) {
    const paramData = JSON.stringify({ id: courseId });
    try {
      const response = await Global.postToAPI(
        "courses/delete-course",
        "simpleData",
        paramData
      );
      // console.log("HANDLE DELETE RESPONSE", response);
      return response;
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async editCourse(item) {
    console.log(item);
    let formData = new FormData();

    formData.append("owner_id", item.id);
    formData.append("courseName", item.courseName);
    formData.append("courseDescription", item.courseDescription);
    formData.append("course_id", item.courseId);
    formData.append("cover_image", item.picture);
    formData.append("zip_path", item.filezip);
    // console.log(formData)
    try {
      const response = await Global.postToAPI(
        "courses/edit-course",
        "FormData",
        formData
      );
      // console.log("THIS IS EDIT COURSE RESPONSE", response);
      return response;
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async getUser(admin_id) {
    const paramData = JSON.stringify({ id: admin_id });

    try {
      const response = await Global.postToAPI(
        "user/get-User",
        "simpleData",
        paramData
      );
      //   console.log("THE GET STUDENT RESPONSE",response);
      return response;
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async getPortalInfo() {
    try {
      const response = await Global.getAPI("admin/get-portal-info");
      // console.log(response);
      return response;
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async getTotalRecords(admin_id) {
    const paramData = JSON.stringify({ owner_id: admin_id });

    try {
      const response = await Global.postToAPI(
        "admin/total-records",
        "simpleData",
        paramData
      );
      return response;
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async changePassword(item) {
    const paramData = JSON.stringify({ id: item.id, oldPassword: item.currentPassword, newPassword: item.password});
    try {
      const response = await Global.postToAPI(
        "user/change-password",
        "simpleData",
        paramData
      );
      if (response) {
        return response;
      } else {
        console.log("Something went wrong:", response);
        return response;
      }
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async recoverAccount(email) {
    const paramData = JSON.stringify({ email: email });
    try {
      const response = await Global.postToAPI(
        "user/forgot-password",
        "simpleData",
        paramData
      );
      if (response) {
        // console.log("THE SEND EMAIL RESPONSE", response.message);
        return response;
      } else {
        console.log("Something went wrong:", response);
        return response;
      }
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async recoverPassword(item) {
    const paramData = JSON.stringify({ password: item.password });
    try {
      const response = await Global.postToAPI(
        "user/reset-password?token=" + item.token,
        "simpleData",
        paramData
      );
      if (response) {
        // console.log("THE SEND EMAIL RESPONSE", response);
        return response;
      } else {
        console.log("Something went wrong:", response);
        return response;
      }
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async login(email, password) {
    const paramData = JSON.stringify({ email: email, password: password });
    try {
      const response = await Global.postToAPI(
        "auth/login",
        "simpleData",
        paramData
      );
      if (response) {
        // console.log("THE LOGIN RESPONSE", response);
        return response;
      } else {
        console.log("Something went wrong:", response);
        return response;
      }
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async signin(item) {
    const paramData = JSON.stringify({ email: item.email, password: item.password, });
    let type = item.type;
    let endpoint = "";
    if (type === "invitation")
    {
      endpoint = "user/share-invite?token="  + item.token
    }
    else{
      endpoint = "auth/login"
    }

    try {
      const response = await Global.postToAPI(
        endpoint,
        "simpleData",
        paramData
      );
      if (response) {
        // console.log("THE SEND EMAIL RESPONSE", response);
        return response;
      } else {
        console.log("Something went wrong:", response);
        return response;
      }
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async savePassword(item) {
    const paramData = JSON.stringify({ password: item.password });
    // console.log(item);
    let type = item.type;
    let endpoint = "";
    if (type === "invite_link")
    {
      endpoint = "user/email-invite?token=" + item.token + "&reference_id=" + item.reference_id
    }
    else if (type === "reset_password"){
      endpoint = "user/reset-password?token=" + item.token 
    }
    // console.log(endpoint);
    try {
      const response = await Global.postToAPI(
        endpoint,
        "simpleData",
        paramData
      );
      if (response) {
        // console.log("THE SAVE-PASSWORD RESPONSE", response);
        return response;
      } else {
        console.log("Something went wrong:", response);
        return response;
      }
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async editProfile(newFormData) {

    let formData = new FormData();

    formData.append("id", newFormData.id);
    formData.append("profile_image", newFormData.picture);
    formData.append("full_name", newFormData.name);
    formData.append("country", newFormData.country);
    formData.append("phone", newFormData.phone);

    try {
      const response = await Global.postToAPI(
        "user/edit-profile",
        "FormData",
        formData
      );
      // console.log("THIS IS FORM SUBMISSION RESPONSE", response);
      return response;
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }

  static async getJoiningInfo() {
    try {
      const response = await Global.getAPI("admin/joining-graph");
      // console.log(response);
      return response;
    } catch (error) {
      console.error("There was an error!", error);
      return error;
    }
  }
}
