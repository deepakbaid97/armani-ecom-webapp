import React from "react";
import { Card, CardMedia } from "@mui/material";

function VideoCard(props) {
  const video = React.useMemo(() => props.video);
  const image = React.useMemo(() => props.image);

  const iniitalasset = { type: "img", src: image };
  const [asset, setAsset] = React.useState(iniitalasset);

  return (
    <div>
      <Card sx={{ height: "50vh" }}>
        <CardMedia
          component={asset.type}
          muted={true}
          autoPlay={true}
          src={asset.src}
          onMouseOver={(e) => {
            setAsset({ type: "video", src: `${video}#t=3` });
            //console.log(e);
            // e.target.play();
          }}
          onMouseOut={(e) => {
            e.target.pause();
            setAsset({ type: "img", src: props.image });
          }}
        />
      </Card>
    </div>
  );
}

export default VideoCard;
