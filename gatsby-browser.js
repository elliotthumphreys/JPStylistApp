const React = require("react")
const { FullScreenNavMenuProvider } = require("./src/components/FullScreenMenu")

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return (
    <FullScreenNavMenuProvider {...props} >
      {element}
    </FullScreenNavMenuProvider>
  )
}