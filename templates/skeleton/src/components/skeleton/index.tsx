import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={375}
        height={250}
        viewBox="0 0 375 250"
        backgroundColor="#949494"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="38" y="95" rx="0" ry="0" width="61" height="20" />
        <circle cx="68" cy="54" r="30" />
        <rect x="150" y="95" rx="0" ry="0" width="61" height="20" />
        <circle cx="179" cy="55" r="30" />
        <rect x="273" y="94" rx="0" ry="0" width="61" height="20" />
        <circle cx="304" cy="51" r="30" />
        <rect x="40" y="211" rx="0" ry="0" width="61" height="20" />
        <circle cx="70" cy="170" r="30" />
        <rect x="152" y="211" rx="0" ry="0" width="61" height="20" />
        <circle cx="181" cy="171" r="30" />
        <rect x="275" y="210" rx="0" ry="0" width="61" height="20" />
        <circle cx="306" cy="167" r="30" />
    </ContentLoader>
)

export default MyLoader

