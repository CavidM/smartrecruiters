import React from 'react';
import { Link } from "react-router-dom";
import useStyles from './PostingsListJss';

function PostingsListComponent(props) {

    const cls = useStyles();

    let postingsList = props.postings.map(post => {

        return (
            <li className={cls.posting} key={post.id} data-test="posting">
                <Link to={`/posting/${post.id}`}>
                    <div className={cls.postingName} data-test="posting-name">
                        {post.name}
                    </div>
                    <div className={cls.postingLocation} data-test="posting-location">
                        <span>{post.location.city}</span>, <span>{post.location.address}</span>
                    </div>
                </Link>
            </li>
        );
    })

    return (
        <ul className={cls.postingsList} data-testid="postings">
            {postingsList}
        </ul>
    );
}

export default PostingsListComponent;