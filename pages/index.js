import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Image from "next/image";
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Meta from "../components/Meta";
import Magazine from "../components/Magazine";
import Heading from "../components/Heading";
import Animate from "../components/Animate";
import Typewriter from 'typewriter-effect';

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  // Лоадер для изображений из GraphQL
  const graphQLImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <Meta image={heroPost } />
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

        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
