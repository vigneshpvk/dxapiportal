import axios from "axios";
import { useState } from "react";

// get access token from pega using 0auth2.0

export const getAccessToken = async () => {
  // intialize access Token

  const tokenUrl = "https://localhost:8443/prweb/PRRestService/oauth2/v1/token"; // Replace with your OAuth token URL
  const clientId = "27880699011854240883"; // Replace with your client ID
  const clientSecret = "CEF7C6DBF237C959B65A4D9E66DABDD0"; // Replace with your client secret
  const grantType = "password"; // use password or client_credentials
  const username = "developer";
  const password = "rules";

  const params = new URLSearchParams();
  params.append("grant_type", grantType);
  params.append("username", username);
  params.append("password", password);
  params.append("client_id", clientId);
  params.append("client_secret", clientSecret);

  try {
    const response = await axios.post(tokenUrl, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data.access_token;
  } catch (error) {
    return "Error";
  }
};

export const pegaapi = axios.create({
  baseURL:
    "https://localhost:8443/prweb/app/constellation-application/api/application/v2",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Bearer " + (await getAccessToken()),
    // Authorization:
    //   "Bearer eyJraWQiOiI0MWFiOWE3ZTIwMGYxOTM4Mzg2YmZhNjY5YTQwMTUzNiIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJhdWQiOiJ1cm46MTgyMzA5ODQwNzA3NTM4ODM1NjMiLCJzdWIiOiJhcGl1c2VyIiwiYXBwX25hbWUiOiJDb25zdGVsbCIsIm5iZiI6MTcyODAzNjM2NywiYXBwX3ZlcnNpb24iOiIwMS4wMS4wMSIsImlzcyI6InVybjpsb2NhbGhvc3QiLCJleHAiOjE3MjgwMzk5NjcsImlhdCI6MTcyODAzNjM2NywianRpIjoiYzY3ZTc0ZGU2MjBiNzlkNzE0ZDE4NWJmNWM5NjUwNjYiLCJvcGVyYXRvcl9hY2Nlc3MiOiJDb25zdGVsbDpBdXRob3JzIn0.BrlspX7Ck1-I1CxvxSYHwAbnqPWN9prAjx6njwu2E4rL1yC_D9qCqSZhTlNkXDkOnYFwn-eh4TcSJwCuWJ3B87ggNF560P2QtWAURNqacmEmC909Mgr8vex1PvdTZCxyWXLFo73vyktt1F301J2OGu5FFDQuZNUfz918UWYX2CHRqswBbcCCKYa9UbaYu2FZhF1XQt4z1GHoeF5c9HPOKXP-RgstdXTCmix6f1XV-1TSYD2UexmF6OvYqRtrrGkrc3fAL0iP9AdkKynJ5L93Ngud3evZTpz4nX4NNRVG_BS1AglQDK61dQQH5siX4JZPSB5rA-iXDqzrZAeqv5uEHUiI22JWCOk8wR46n3ydxQt1HFRnhP2NGn3-JHgdFUE0A4ILEfzzs5t4SSXzFcioBobDKMAyguBIQ5eZM2KHG_jXlKxCKQHOgJkPDsOA6RFabcacfYq9sHOo3hGge7YZGVaneeiMbeJGHv4aWvkMFehHRD1ZkzfPCwuu6doRcz2M6iuW_3eAB2KReIxVNl4E8w5mAnCCdkRswQEB8eyOhZkwUp34fUpX0KLB_6diNUrYOq9L2IgMoDs4HTTbCEGU0rjW5MLf_m95eILYuMIeG4aQqfeSh_urEpLfYFrFYOLdnyY5rwcxFBNbHVzs5NiG7XxpJblO-RlpLOqwXhcKCmA",
  },
});
