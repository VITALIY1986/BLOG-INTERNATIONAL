
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
  const filterPostsByTag = (allPosts, tagName) => {
    return allPosts.filter((post) => 
      post.tags && post.tags.tagname === tagName
    );
  };
  
  // Использование для выбора всех постов с тегом "myfirstimg"
  const filteredPosts = filterPostsByTag(allPosts, "myfirstimg");
 const firstVive = filteredPosts[0];
  return (
    <>
    <Head>
                <title>
                {filteredPosts?.title ? firstVive.title : 'Untitled Post'} | Next.js Blog Example with
                </title>
                <meta property="og:image" content={firstVive?.title ? firstVive.title : 'Untitled Post'}/>
              </Head>
      <Magazine>
        <Magazine.Cover image={firstVive }>
          <Heading className="absolute left-4 md:left-8 bottom-40 md:bottom-20">
            <Animate name="fadeIn" delay="1.2s" duration="2s">
              <Heading.Title>
                <h1 className="text-white text-5xl font-extrabold leading-tight ">
                <Typewriter
  options={{
    strings: [firstVive?.title, 'Hello', 'Buna'],  // Используем значение из heroPost.title
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
                src={firstVive.coverImage.url}  // Используйте url изображения
                width={150}
                height={150}
                alt="travel"
              />
            </Animate>
          </div>
          <Magazine.Footer className="absolute bottom-6 w-full" color="#fff" />
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









                    <Block className="py-24 px-4 md:px-8 pb-20 xl:pb-52">
                        <Heading>
<div className="about-contact-box info-box shadow-box mt-6">
<img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>
<p className="font-bold text-4xl text-white"> 2008 </p>
<p className="text-slate-200 text-lg">Навчалася в коледжі Імені Нечуя-Левицького за спеціальністю художник-дизайнер</p>
    </div>
    <div className="about-contact-box info-box shadow-box mt-6">
<img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>

<p className="font-bold text-4xl text-white"> 2011 </p>
                                    <p className="text-slate-200 text-lg">Навчалася - Київський Національний університет біотехнологій та природних ресурсів за спеціальністю інженер.</p>
    </div>
    <div className="about-contact-box info-box shadow-box mt-6">
<img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>

<p className="font-bold text-4xl text-white"> 2015 </p>
                                    <p className="text-slate-200 text-lg">Розпочала свою професійну діяльність як контент-менеджер. За цей час я займалася:</p>
                                    <ul className="mt-3 text-lg">
                                        <li>- SMM </li>
                                        <li>- Створенням постів і дизайнів</li>
                                        <li>- Створенням рекламних банерів (фото ,відео)</li>
                                        <li>- Фотографуванням та розробкою рекламних креативів</li>
                                        <li>- Відеоанімацією</li>
                                        <li>- Заповненням та зміною дизайнів сайтів</li>
                                        <li>- Запуском рекламних кампаній у Facebook та Google</li>
                                        <li>- SEO</li>
                                        </ul>
    </div>

    <div className="about-contact-box info-box shadow-box mt-6">
<img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>

<p className="font-bold text-4xl text-white"> 2015 </p>
                                    <p className="text-slate-200 text-lg">Розпочала свою професійну діяльність як контент-менеджер. За цей час я займалася:</p>
                                    <ul className="mt-3 text-lg">
                                        <li>- SMM </li>
                                        <li>- Створенням постів і дизайнів</li>
                                        <li>- Створенням рекламних банерів (фото ,відео)</li>
                                        <li>- Фотографуванням та розробкою рекламних креативів</li>
                                        <li>- Відеоанімацією</li>
                                        <li>- Заповненням та зміною дизайнів сайтів</li>
                                        <li>- Запуском рекламних кампаній у Facebook та Google</li>
                                        <li>- SEO</li>
                                        </ul>
    
    
    
                                        <p className="text-slate-200 text-lg">Освоїла такі програми:</p>
<ul className="mt-3 text-lg">
                                        <li>- Adobe Photoshop</li>
                                        <li>- Adobe After Effects</li>
                                        <li>- Adobe Premiere Pro</li>
                                        <li>- DaVinci Resolve </li>
                                        <li>- Google Web Designer</li>
                                        <li>- Figma</li>
                                         
                                        </ul>
                                        <p className="text-slate-200 text-lg">Працювала з адмінпанелями:</p>   

                                        <ul className="mt-3 text-lg">
                                        <li>- WordPress</li>
                                        <li>- Joomla</li>
                                        <li>- PrestaShop</li>
                                        <li>- Contentful</li>
                                       </ul>     
                                       <p className="text-slate-200 text-lg">Просування сайтів та SEO</p>   

<ul className="mt-3 text-lg">
<li>- Google Analytics</li>
<li>- Google Keyword Planner</li>
<li>- Google Search Console</li>
<li>- Facebook Pixel</li>
<li>- Ahrefs</li>
<li>- Різні сервіси для перевірки текстів на унікальність</li>
</ul>    

<p className="text-slate-200 text-lg">Дизайн  </p>   

<ul className="mt-3 text-lg">
<li>- Схеми користувацьких інтерфейсів (UI)</li>
<li>- Схеми користувацьких потоків (User Flows)</li>
<li>- Карти сайтів (Sitemaps)</li>
<li>- Прототипування</li>

</ul>  
<p className="text-slate-200 text-lg">Навчилася планувати кожен проект  </p>   

<ul className="mt-3 text-lg">
<li>- Trello </li>


</ul>  

                                        <p className="text-slate-200 text-lg">Також набула досвіду з кодування:</p> 
                                        <ul className="mt-3 text-lg">
                                        <li>- редактор кода Visual Studio Code</li>
                                        <li>- HTML, HTML5, CSS, SASS, SCSS</li>
                                        <li>- Основи JavaScript</li>
                                        <li>- фреймворки - Bootstrap 5 \ Bulma \ Tailwind CSS</li>
                                       </ul>   
                                      
    
    
    
    
    
    
    
    
    
    
    
    </div>                     
    <div className="about-contact-box info-box shadow-box mt-6">
    <img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>
    <p className="font-bold text-4xl text-white"> 2016 </p> 

<p className="text-slate-200 text-lg">Почала створювати сайти на платформах Contao та WordPress.</p>
        
        
        
        </div>                               
        <div className="about-contact-box info-box shadow-box mt-6">  


        <p className="font-bold text-4xl text-white"> 2018 </p> 
        <img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>
<p className="text-slate-200 text-lg">Поглибила знання з кодування на JavaScript та React. Почала розробляти особисті блоги для клієнтів на платформах Next.js та Gatsby.js.</p>
<ul className="mt-3 text-lg">
                                        <li>- Next.js</li>
                                        <li>- Gatsby.js</li>
                                        <li>- GraphQL</li>
                                        <li>- Git </li>
                                        <li>- Npm </li>
                                        <li>- Node.js</li>
                                       </ul>  


        </div>
        <div className="about-contact-box info-box shadow-box mt-6">
        <img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>  
        <p className="font-bold text-3xl text-white"> Знання мов </p> 
<p className="text-slate-200 text-lg">ВІЛЬНО - Українська , Російська </p>
<p className="text-slate-200 text-lg">В1 - Англійська  </p>
<p className="text-slate-200 text-lg">С1 - Румунська  </p>
        
        </div>                             
        <div className="about-contact-box info-box shadow-box mt-6">  
        <img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>
        <p className="font-bold text-3xl text-white"> На даний момент - поглиблюю знання з UI/UX дизайну та фотографії </p> 

<p className="text-slate-200 text-lg">Цей шлях дозволив мені стати справжнім професіоналом у сфері контент-менеджменту та веб-розробки, поєднуючи креативний підхід і технічні навички. На даний момент я займаюсь переважно контент-менеджментом, зосереджуючись на створенні високоякісного контенту, управлінні соціальними мережами, розробці стратегій SEO та запуску ефективних рекламних кампаній.</p>
            
             </div>  

             <div className="about-contact-box info-box shadow-box mt-6"> 
             <img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/> 
             <p className="font-bold text-3xl text-white"> Відпочинок  </p> 


<p className="text-slate-200 text-lg">Вільний час проводжу зі своєю сім'єю часто подорожую, обожнюю  гори 🏔️ та море 🌊. Гори надають мені можливість насолоджуватися природою, свіжим повітрям та активним відпочинком, як-от піші походи 🚶 та катання на лижах 🎿. Морський відпочинок дарує спокій та релаксацію 😌, дозволяє насолоджуватися сонцем ☀️, плаванням. Такі подорожі заряджають мене енергією ⚡ та натхненням для нових професійних звершень.</p>
                </div>  
                <div className="about-contact-box info-box shadow-box mt-6">  
                <img src="/assets/images/other/icon2.png" alt="Icon" width={40} height={70} className="star-icon"/>
                <p className="font-bold text-3xl text-white"> Віра  </p> 
                <p className="text-slate-200 text-lg">Вірю що Ісус є  Господь ✝️</p>  
                     </div>  
                
                      
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
