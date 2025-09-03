import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

export function MovieCounter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  return (
    <div className="counter-btn-container">
      <Badge badgeContent={like} color="primary">
        <IconButton
          aria-label="Like movie"
          color="primary"
          onClick={() => setLike(like + 1)}
        >
          <ThumbUpIcon />
        </IconButton>
      </Badge>

      <Badge badgeContent={disLike} color="error">
        <IconButton
          aria-label="Dislike movie"
          color="error"
          onClick={() => setDisLike(disLike + 1)}
        >
          <ThumbDownIcon />
        </IconButton>
      </Badge>
    </div>
  );
}
