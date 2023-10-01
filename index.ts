const expressionTypes = [
  "Expr",
  "ConditionalExpr",
  "LogicalOrExpr",
  "LogicalAndExpr",
  "ComparisonExpr",
  "PowExpr",
  "AdditiveExpr",
  "MultiplicativeExpr",
  "UnaryExpr",
  "PostfixExpr",
  "PrimaryExpr",
  "PixelSelector",
  "ChannelSelector",
  "ExpandedPixelExpr",
] as const;
const kindTypes = [
  "IDENT",
  "NUM_LIT",
  "STRING_LIT",
  "RES_image",
  "RES_pixel",
  "RES_int",
  "RES_string",
  "RES_void",
  "RES_boolean",
  "RES_nil",
  "RES_write",
  "RES_height",
  "RES_width",
  "RES_if",
  "RES_fi",
  "RES_do",
  "RES_od",
  "RES_red",
  "RES_green",
  "RES_blue",
  "CONST", // Z | BLACK | BLUE | CYAN | DARK_GRAY | GRAY | GREEN | LIGHT_GRAY | MAGENTA | ORANGE | PINK | RED | WHITE | YELLOW
  "BOOLEAN_LIT", // TRUE, FALSE
  "COMMA", // ,
  "SEMI", // ;
  "QUESTION", // ?
  "COLON", // :
  "LPAREN", // (
  "RPAREN", // )
  "LT", // <
  "GT", // >
  "LSQUARE", // [
  "RSQUARE", // ]
  "ASSIGN", // =
  "EQ", // ==
  "LE", // <=
  "GE", // >=
  "BANG", // !
  "BITAND", // &
  "AND", // &&
  "BITOR", // |
  "OR", // ||
  "PLUS", // +
  "MINUS", // -
  "TIMES", // *
  "EXP", // **
  "DIV", // /
  "MOD", // %
  "BLOCK_OPEN", // <:
  "BLOCK_CLOSE", // :>
  "RETURN", // ^
  "RARROW", // ->
  "BOX", //  []
  "EOF",
] as const;

type Expression = (typeof expressionTypes)[number];
type Kind = (typeof kindTypes)[number];

const res: Array<Kind> = [];

function generate(exp: Expression) {
  let returnExpr = "";
  switch (exp) {
    case "ExpandedPixelExpr":
      returnExpr += "LPAREN";
      returnExpr += generate("Expr");
      returnExpr += "COMMA";
      returnExpr += generate("Expr");
      returnExpr += "COMMA";
      returnExpr += generate("Expr");
      returnExpr += "RPAREN";

      break;
  }
}
