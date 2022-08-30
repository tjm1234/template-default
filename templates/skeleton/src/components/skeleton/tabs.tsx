import React from "react"
import ContentLoader from "react-content-loader"

const MyTabs = (props) => (
    <ContentLoader
        speed={2}
        width={375}
        height={375}
        viewBox="0 0 375 375"
        backgroundColor="#4f4f4f"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="12" y="0" rx="0" ry="0" width="100" height="32" />
        <rect x="142" y="0" rx="0" ry="0" width="100" height="32" />
        <rect x="268" y="0" rx="0" ry="0" width="100" height="32" />
        <rect x="16" y="60" rx="0" ry="0" width="343" height="220" />
    </ContentLoader>
)

export default MyTabs