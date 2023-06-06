import React, { useState } from "react";
import styled from "@emotion/styled";
import { VectorMap, VectorMapProps } from "@south-paw/react-vector-maps";
import { Box, Typography } from "@mui/material";
import webIcon from "../../assets/home/web-icon.png";
import appIcon from "../../assets/home/app-icon.png";
import dashIcon from "../../assets/home/dash-icon.png";

// You'll need to download the json file from the docs site or you can create your own.
import * as world from "../../data/world.json";
import Image from "next/image";


interface MapContainerProps {
    selectedCountry: string[];
}

const MapContainer = styled.div`
  margin: 1rem auto;
  
  width: 100%; /* Set the width to 100% for responsiveness */

  @media (min-width: 768px) {
    /* Set a maximum width for larger screens */
    max-width: 800px;
  }

  svg {
    path {
      fill: rgba(204, 204, 204, 1);
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: #4ba6d6;
      }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked="true"] {
        fill: rgba(15, 143, 151, 1);
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current="true"] {
        fill: ${({ selectedCountry }: MapContainerProps) => {

        if (JSON.stringify(selectedCountry) == JSON.stringify(["us", "eg"])) {
            return "green"; // Make Egypt green when Website is selected
        } else {
            return "rgba(15, 143, 151, 1)";
        }

    }};
      }
    }
  }
`;

const Map = () => {
    const [selectedCountry, setSelectedCountry] = useState(["us"]);

    const handleSelection = (countryCode: string[]): void => {
        setSelectedCountry(countryCode);
    };

    return (
        <>
            <Typography sx={{ textAlign: "center", fontSize: "24px", fontWeight: "500", mt: "48px" }}>GLOBAL PRESENCE</Typography>
            <MapContainer selectedCountry={[]}>
                <VectorMap
                    {...(world as VectorMapProps)}
                    checkedLayers={selectedCountry}
                    // onLayerClick={handleSelection}
                    
                />
            </MapContainer>

            <Box
                sx={{ color: "rgba(223, 223, 223, 1)", width: "100%", height: "1px" }}
            ></Box>

            <Box sx={{ display: "flex", justifyContent: "center", gap: "24px", mb: "74px", flexWrap: "wrap" }}>
                <Box
                    sx={{ cursor: "pointer", display: "flex", gap: "12px" }}
                    onClick={() => handleSelection(["us", "eg"])}
                >
                    <Image
                        src={appIcon}
                        alt="applications"
                        width="18"
                        height="28"
                    />
                    <Typography>
                        Applications
                    </Typography>
                </Box>
                <Box
                    sx={{ cursor: "pointer", display: "flex", gap: "12px" }}
                    onClick={() => handleSelection(["eg", "fr", "gb", "ge", "gr", "hr"])}
                >
                    <Image src={webIcon} alt="applications" width="26" height="22" />
                    <Typography>
                        Website
                    </Typography>
                </Box>
                <Box
                    sx={{ cursor: "pointer", display: "flex", gap: "12px" }}
                    onClick={() => handleSelection(["eg", "us", "ca"])}
                >
                    <Image src={dashIcon} alt="applications" width="26" height="21" />
                    <Typography>
                        Dashboards
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Map;
