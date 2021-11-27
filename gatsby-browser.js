const React = require("react")
const { FullScreenNavMenuProvider } = require("./src/components/FullScreenMenu")

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return (
    !!props?.pageContext?.navbar ? <FullScreenNavMenuProvider {...props} >
      {element}
    </FullScreenNavMenuProvider> : element 
  )
}