import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Cards(props) {
  const { content, dateCreated } = props;

  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: 200,
        boxShadow: "1px 1px 15px 2px rgba(0,0,0,1)",
        backgroundColor: "    #E7EEF3  ",
        [`@media (max-width: 600px)`]: {
          maxWidth: 300,
          minHeight: 150,
        },
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          spacing={0}
          className=" mt-[-0.9rem] mb-[1rem] ml-[-0.95rem]"
        >
          <Chip label="EXCLUSIVE" color="success" />
        </Stack>

        <span className="bg-blue-300 px-2 whitespace-nowrap rounded-[0.3rem]  text-sm  ">
          Date Created : {dateCreated}
        </span>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: 16,
            [`@media (max-width: 600px)`]: {
              fontSize: 12,
            },
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
