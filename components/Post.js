import Link from "next/link";
import Image from "next/image";
import CoverImage from './cover-image';
import styles from "../styles/Post.module.scss";
import Avatar from '../components/avatar';
const Post = (props) => {
    const post = props.post;
    const model = `post--style-${props.model}`;
    const color = `post--${props.color}`;

    const hover = props.hover || "zoom-in";

    return (
        <article className={`${styles.post} ${styles[model]} ${styles[color]}`} style={props.style}>
            <div className={styles.post__inner}>
                {post.image && (
                    <div className={`${styles.post__cover} ${hover}`}>
                        <div className={styles.post__cover__inner}>
                            <div className={styles.post__cover__media}>
                                <div className={styles.post__cover__media__image}>
                                    <div className={styles.post__cover__loading}>
                                        <span className={`afc-spinner afc-spinner--${props.color}`}></span>
                                    </div>
                                    <Link href={post.slug}>
                                        <a>
                                            <div className="relative rounded-lg">
             
                                         
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <span className={styles.post__cover__overlay}></span>
                    </div>
                )}
                <div className={styles.post__content}>
                    <div className={styles.post__content__inner}>
                    <CoverImage title={post.title} slug={post.slug} url={post.coverImage?.url || '/default-image.jpg'} />
                    {post.author && (
        <Avatar name={post.author?.name || 'Anonymous'} picture={post.author?.picture || '/default-avatar.jpg'} />
      )}
                        <h3 className='text-2xl '>
                          <div className=" text-white text-sm"><span className="text-">Teg: </span> {post.tags?.tagname}</div>
                            <Link href={`/posts/${post.slug}`}>
                            <div className="button_shine text-center mt-3 text-white">
                            {post.title}
</div>
                               
                            </Link>
                        </h3>
                        {post.excerpt && props.max_words > 0 && (
                            <p className='text-lg'>
                                {post.excerpt}
                             
                            </p>
                        )}
                    </div>
       
                </div>
            </div>
        </article>
    );
};

Post.defaultProps = {
    title: "Title",
    quality: 400,
    max_words: 400,
    image_width: 600,
    image_height: 600,
};

export default Post;
