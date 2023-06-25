import { Box, Typography } from "@mui/material";
import React from "react";

const DashboardTable = ({ pageName, hint, children } :any) => {
  const arrowRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="112"
      height="59"
      viewBox="0 0 112 59"
    >
      <g
        id="Group_3705"
        data-name="Group 3705"
        transform="translate(-678 -6037)"
      >
        <line
          id="Line_13"
          data-name="Line 13"
          x2="51"
          transform="translate(738 6071)"
          fill="none"
          stroke="#ed1b24"
          stroke-width="4"
        />
        <text
          id="_"
          data-name="&gt;"
          transform="translate(770 6080)"
          fill="#ed1b24"
          font-size="40"
          font-family="Tajawal-Bold, Tajawal"
          font-weight="700"
        >
          <tspan x="0" y="0">
            &gt;
          </tspan>
        </text>
        <line
          id="Line_14"
          data-name="Line 14"
          x2="51"
          transform="translate(678 6071)"
          fill="none"
          stroke="#ed1b24"
          stroke-width="4"
        />
        <text
          id="_2"
          data-name="&gt;"
          transform="translate(710 6080)"
          fill="#ed1b24"
          font-size="40"
          font-family="Tajawal-Bold, Tajawal"
          font-weight="700"
        >
          <tspan x="0" y="0">
            &gt;
          </tspan>
        </text>
      </g>
    </svg>
  );

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" sx={{ color: "#ED1B24", fontWeight: "bold" }}>
          {pageName}
        </Typography>
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="146.077"
            height="9.045"
            viewBox="0 0 146.077 9.045"
          >
            <g id="line---" transform="translate(-893.445 -1166.477)">
              <path
                id="Path_37708"
                data-name="Path 37708"
                d="M0,0H62.055"
                transform="translate(893.445 1170.739)"
                fill="none"
                stroke="#ed1b24"
                stroke-width="2"
              />
              <path
                id="Path_37713"
                data-name="Path 37713"
                d="M0,0H15"
                transform="translate(978 1170.739)"
                fill="none"
                stroke="#ed1b24"
                stroke-width="2"
              />
              <path
                id="Path_37714"
                data-name="Path 37714"
                d="M0,0H15"
                transform="translate(1016 1170.739)"
                fill="none"
                stroke="#ed1b24"
                stroke-width="2"
              />
              <circle
                id="Ellipse_5"
                data-name="Ellipse 5"
                cx="3.523"
                cy="3.523"
                r="3.523"
                transform="translate(956.477 1167.477)"
                fill="none"
                stroke="#ed1b24"
                stroke-width="2"
              />
              <circle
                id="Ellipse_6"
                data-name="Ellipse 6"
                cx="3.523"
                cy="3.523"
                r="3.523"
                transform="translate(993.477 1167.477)"
                fill="none"
                stroke="#ed1b24"
                stroke-width="2"
              />
              <circle
                id="Ellipse_7"
                data-name="Ellipse 7"
                cx="3.523"
                cy="3.523"
                r="3.523"
                transform="translate(1031.477 1167.477)"
                fill="none"
                stroke="#ed1b24"
                stroke-width="2"
              />
            </g>
          </svg>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Box>{arrowRight}</Box>

          <Typography
            variant="h2"
            sx={{ color: "#000", fontSize: "20px", fontWeight: "bold" }}
          >
            {hint}
          </Typography>
          <Box sx={{ transform: "scaleX(-1)" }}>{arrowRight}</Box>
        </Box>

        {/**** Form ******/}
        {children}
      </Box>
    </Box>
  );
};

export default DashboardTable;
