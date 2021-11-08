import { rgba } from "polished";

const colorTitle = rgba("white", 0.57);
const colorContent = rgba("white", 0.96);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Setting an id to this theme
  id: "dark",

  // Font Family
  fontFamily: "Poppins",

  // Properties of a Card
  cardHeight: "30rem",
  cardWidth: "25rem",
  borderRadius: "1rem",
  colorCardBackground: "#1B1B1B",

  // Properties of Card Title
  cardTitleFontSize: "2rem",
  cardTitlePaddingTop: "2rem",
  cardTitlePaddingRight: "None",
  cardTitlePaddingBottom: "2rem",
  cardTitlePaddingLeft: "2rem",
  colorTitle: colorTitle,

  // Properties of Card Content
  cardContentPaddingTop: "None",
  cardContentPaddingRight: "None",
  cardContentPaddingBottom: "None",
  cardContentPaddingLeft: "None",

  // Properties of Card Content (Text other than title)
  cardContentFontSize: "2em",
  colorContent: colorContent,
};