
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Image from "next/image";
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import Meta from "../components/meta";
import Magazine from "../components/Magazine";
import Heading from "../components/Heading";
import Animate from "../components/Animate";
import Typewriter from 'typewriter-effect';
import { Block } from "../components/Grid";
import Post from "../components/Post";
import Masonry from "react-masonry-css";
export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts//.slice(1) Лоадер для изображений из GraphQL 

  // Лоадер для изображений из GraphQL 
  const graphQLImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
    <Head>
                <title>
                {heroPost?.title ? heroPost.title : 'Untitled Post'} | Next.js Blog Example with
                </title>
                <meta property="og:image" content={heroPost?.title ? heroPost.title : 'Untitled Post'}/>
              </Head>
      <Magazine>
        <Magazine.Cover image={heroPost }>
          <Heading className="absolute left-4 md:left-8 bottom-40 md:bottom-20">
            <Animate name="fadeIn" delay="1.2s" duration="2s">
              <Heading.Title>
                <h1 className="text-white text-5xl font-extrabold leading-tight ">
                <Typewriter
  options={{
    strings: [heroPost.title, 'Hello', 'Buna'],  // Используем значение из heroPost.title
    autoStart: true,
    loop: true,
  }}
/>
                </h1>
              </Heading.Title>
            </Animate>
          </Heading>
          <div className="absolute right-3 md:right-8 bottom-20">
            <Animate name="fadeIn" delay="1.2s" duration="2s">
              <Image
                className="App-logo"
                loader={graphQLImageLoader}
                src={heroPost.coverImage.url}  // Используйте url изображения
                width={150}
                height={150}
                alt="travel"
              />
            </Animate>
          </div>
          <Magazine.Footer className="absolute bottom-6 w-100" color="#fff" />
        </Magazine.Cover>

        <Magazine.Content>
                    <Block className="py-24 px-4 md:px-8 pb-20 xl:pb-52">
                        <Heading>
                            <Heading.Title>
                                <h2 className="font-sans xl:absolute lg:left-8 xl:-left-32 right-8 text-4xl md:text-5xl font-extrabold  leading-tight text-white ">
                                    <span>Мене звати Альона Статкевич, і я рада вітати вас на моїй веб-сторінці. </span>
                                    <span style={{ color: "#d10000" }}>Тут ви знайдете мої проекти, досягнення та інформацію про мою професійну діяльність.</span>
                                </h2>
                            </Heading.Title>
                        </Heading>
                    </Block>

                  
                    <Block className="pb-24 px-4 md:px-8">
                    <h2 className="text-5xl font-bold mb-6 text-white"> Мої проекти </h2> 
                        <Masonry breakpointCols={{ default: 2, 768: 1 }} className="masonry flex" columnClassName="masonry__item">
                            {morePosts &&
                              
                                morePosts.map((item, index) => (
                                    <div key={index}>
                                        <Animate name="fadeInUpXs" delay={`${index + 3}00ms`} duration="1.8s">
                                            <Post post={item} model={1} max_words={15} image_width={item.image_width} image_height={item.image_height} />
                                        </Animate>
                                    </div>
                                ))}
                        </Masonry>
                      
                    </Block>
                   
                   
                </Magazine.Content>
       
      </Magazine>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
