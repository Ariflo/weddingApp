import variable from "./../variables/platform";

export default (variables = variable) => {
  const contentTheme = {
    ".padder": {
      padding: variables.contentPadding
    },
    flex: 1,
    backgroundColor: '#d2dbe2',
    "NativeBase.Segment": {
      borderWidth: 0,
      backgroundColor: '#d2dbe2'
    }
  };

  return contentTheme;
};
