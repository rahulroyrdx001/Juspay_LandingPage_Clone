import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import style from "../Style/homescreenroi.module.css";

export default function Homscreenroical() {
  return (
    <div className={style.roi}>
      <div className={style.roibox}>
        <div className={style.wrapper}>
          <div className={style.inputbox}>
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
              }}
            >
              <h3>Enter details of your payment cost</h3>
            </div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "55ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <h4>Number of monthly Transactions</h4>
              <TextField
                id="outlined-number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <h4>Avg Ticket Size (USD)</h4>
              <TextField
                id="outlined-start-adornment"
                sx={{ m: 1, width: "55ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
              <h4>Authorization Rate</h4>
              <TextField
                id="outlined-start-adornment"
                sx={{ m: 1, width: "55ch" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
              />
            </Box>
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
              }}
            >
              <h4>Gross value of payments processed monthly</h4>
              <h3>17000</h3>
            </div>
          </div>
          <div className={style.outputbox}>
            <div style={{
                width: "80%",
                color: "#F1F0F0",
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
              }}>
              <h3>ROI Calculator Results</h3>
            </div>
            <div style={{ color: "#F1F0F0",width:"100%",height:"80%",display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center" }}>
              <div className={style.resultbox}>
                <h4>Saving in Transaction Processing costs</h4>
                <p>$2500</p>
              </div>
              <div className={style.resultbox}>
                <h4>Saving in Transaction Processing costs</h4>
                <p>$2500</p>
              </div>
              <div className={style.resultbox}>
                <h4>Saving in Transaction Processing costs</h4>
                <p>$2500</p>
              </div>
              <div className={style.resultbox}>
                <h4>Saving in Transaction Processing costs</h4>
                <p>$2500</p>
              </div>
            </div>
            <div style={{width:"90%", color: "#F1F0F0", display:"flex",justifyContent:"space-around",alignItems:"center" }}>
              <h2>Overall ROI</h2>
              <p>$157800</p>
            </div>
          </div>
        </div>
        <button>schedule a call</button>
      </div>
    </div>
  );
}
