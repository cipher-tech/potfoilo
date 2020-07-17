import React from 'react'
import styled from 'styled-components'
import { OffsetText } from './styledComponents'
// import SkillProgress from './styledComponents/skillProgress'
import githubSvg from "../images/github.svg"
import apolloGraphqlsvg from "../images/svgIcons/apollo-graphql-1.svg"
import cssSvg from "../images/svgIcons/css3.svg"
import expressSvg from "../images/svgIcons/express.svg"
import graphqlSvg from "../images/svgIcons/graphql.svg"
import htmlSvg from "../images/svgIcons/html.svg"
import invisionStudioSvg from "../images/svgIcons/invision-studio.svg"
import javascriptSvg from "../images/svgIcons/javascript.svg"
import jquerySvg from "../images/svgIcons/jquery.svg"
import laravelSvg from "../images/svgIcons/laravel-2.svg"
import mongodbSvg from "../images/svgIcons/mongodb.svg"
import mysqlSvg from "../images/svgIcons/mysql.svg"
import nextJsSvg from "../images/svgIcons/next-js.svg"
import nodeJsSvg from "../images/svgIcons/node-js-logo.svg"
import phpSvg from "../images/svgIcons/php.svg"
import pythonSvg from "../images/svgIcons/python-5.svg"
import reactSvg from "../images/svgIcons/react.svg"
import redisSvg from "../images/svgIcons/redis.svg"
import sassSvg from "../images/svgIcons/sass.svg"
import sequelizeSvg from "../images/svgIcons/sequelize.svg"
import webpackSvg from "../images/svgIcons/webpack.svg"
import adobeSvg from "../images/svgIcons/adobe-xd.svg"
import bootstrapSvg from "../images/svgIcons/bootstrap-4.svg"
import mongooseSvg from "../images/svgIcons/mongoose.svg"
import materializeSvg from "../images/svgIcons/materialize.svg"


let Container = styled.div`
    /* background: ${props => props.theme.colorPrimary}; */
    /* height: 50vh; */
    grid-column: 1/-1;
    display: grid;
    overflow: hidden;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    @media only screen and (min-width: ${props => props.theme.breakPoints.bpLargest}) {
        grid-template-columns: repeat(2, minmax(40rem, 1fr));

        }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLargest}) {
        grid-template-columns: repeat(2, minmax(30rem, 1fr));
        overflow: hidden;
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
        grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
        overflow: hidden;
    }
    gap: 1rem 10rem;

    .tech-stack{
        grid-column: 1/-1;
        display: grid;
        width: 100%;
        padding: 2rem 2rem;
        gap: 2rem 3rem;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        justify-items: center;

        &__item{
            text-align: center;
            /* height: 10rem; */
            width: 14rem;
            /* background: #181616; ${props => props.theme.colorSecondary}; */

            img{
                height: 7rem;
                width: 7rem;
            }
            &--text{
                display: flex;
                width: 100%;
                padding: 1rem 2rem;
                text-align: center;
                justify-content: center;
                font-size: ${props => props.theme.font.xxsmall};
            }
        }
    }
    .title{
        grid-column: 1/-1;
    }
    .skillSet{
        display: grid;
        grid-template-columns: 2fr;
        justify-items: center;
        align-items: flex-start;
        /* height: 100% ; */
        padding: 3rem 4rem;
        color: ${props => props.theme.colorLight};

        @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
            padding: 2rem 1rem;
        }
        &-heading{
            display: flex;
            justify-self: center;
            font-size: 1.9rem;
            width: 100%,
        }
    }
    .skillSet:last-child{
        justify-items: center;
    }
`
function Skills() {
    const tech_stack = [
        {
            name: "html",
            icon: htmlSvg
        },
        {
            name: "css",
            icon: cssSvg
        },
        {
            name: "bootstrap",
            icon: bootstrapSvg
        },
        {
            name: "materialize",
            icon: materializeSvg
        },
        {
            name: "SCSS",
            icon: sassSvg
        },
        {
            name: "AdobeXD",
            icon: adobeSvg
        },
        {
            name: "Invision Studio",
            icon: invisionStudioSvg
        },
        {
            name: "JavaScript",
            icon: javascriptSvg
        },
        {
            name: "jQuery",
            icon: jquerySvg
        },
        {
            name: "React",
            icon: reactSvg
        },
        {
            name: "NodeJS",
            icon: nodeJsSvg
        },
        {
            name: "Express",
            icon: expressSvg
        },
        {
            name: "MongoDB",
            icon: mongodbSvg
        },
        {
            name: "Mongoose",
            icon: mongooseSvg
        },
        {
            name: "PHP",
            icon: phpSvg
        },
        {
            name: "Laravel",
            icon: laravelSvg
        },
        {
            name: "MySQL",
            icon: mysqlSvg
        },
        {
            name: "Sequelize",
            icon: sequelizeSvg
        },
        {
            name: "GraphQl",
            icon: graphqlSvg
        },
        {
            name: "Apollo",
            icon: apolloGraphqlsvg
        },
        {
            name: "webpack",
            icon: webpackSvg
        },
        {
            name: "GitHub",
            icon: githubSvg
        },
        {
            name: "Python",
            icon: pythonSvg
        },
        {
            name: "NextJs",
            icon: nextJsSvg
        },
        {
            name: "Redis",
            icon: redisSvg
        },
    ]
    return (
        <Container>
            <OffsetText className="title" offset="Skills">
                Skills
            </OffsetText>

            <div className="tech-stack">
                {
                    tech_stack.map((item, index) => (
                        <p key={item.name}
                            className="tech-stack__item"
                            data-aos="fade-up"
                            data-aos-offset="250"
                            data-aos-delay={`${50 * index}`}
                            data-aos-duration={`${6 * index}`}
                            data-aos-easing="ease-in-out"
                            data-aos-once="true"
                        >
                            <img src={item.icon} alt="skill-logo" />
                            <span className="tech-stack__item--text">
                                {item.name}
                            </span>
                        </p>
                    ))
                }

            </div>
            {/* <div className="skillSet">
                <h5 className="skillSet-heading">Programming Skills</h5>

                <SkillProgress title="HTML & CSS" level="95" />
                <SkillProgress title="JavaScript" level="95" />
                <SkillProgress title="NodeJS" level="90" />
                <SkillProgress title="Python" level="80" />
                <SkillProgress title="PHP" level="80" />
            </div>
            <div className="skillSet">
                <h5 className="skillSet-heading">FrameWorks</h5>

                <SkillProgress title="React" level="95" />
                <SkillProgress title="Laravel" level="85" />
                <SkillProgress title="Express" level="85" />
                <SkillProgress title="Apollo" level="80" />
                <SkillProgress title="Python" level="75" />

            </div> */}
        </Container>
    )
}

export default Skills
