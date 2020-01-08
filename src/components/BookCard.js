import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Styled from "styled-components";
import { BookCover } from "./BookCover";
import { isEmpty, get } from "lodash";
const StyledCard = Styled(Card)`
width: 300`;

export function BookCard({ book }) {
  if (isEmpty(book)) {
    return <div></div>;
  } else {
    return (
      <StyledCard>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {get(book, ["volumeInfo", "title"])}
            </Typography>
            <Typography variant="subtitle2">
              {get(book, ["volumeInfo", "authors"])}
            </Typography>
            <BookCover book={book} />
            <Typography variant="body2" color="textSecondary" component="p">
              {get(book, ["volumeInfo", "description"])}
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    );
  }
}
