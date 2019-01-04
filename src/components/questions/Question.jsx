import React from 'react';
import { NavLink } from 'react-router-dom';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import userImage from 'assets/user.png';
import { strLimit } from 'utils/helpers';

export default ({ question, complete }) => {
  let { description, updated_at: updatedAt, author,id } = question;
  if (!complete) description = strLimit(description, 80);

  const ago = distanceInWordsToNow(new Date(updatedAt), {
    includeSeconds: true,
    addSuffix: true,
  });
  return (
    <div className="shadow mb-3 bg-white">
      <div className="p-3">
        <div className="d-none-md">
          <img src={userImage} alt={author.name} className="w-50 h-50 rounded" />
        </div>
        <div className="ml-2 lh-loose">
          <NavLink to={`/questions/${id}`} className="d-block text-1 font-serif fw-900 text-dark">
            {question.title}
          </NavLink>

          <p className="text-grey-dark">{description}</p>
          <div className="d-flex justify-end flex-wrap border-t-1 border-light width-full text-small py-1 text-grey-dark">
            <span>{ago}</span>
            <span className="px-2">By</span>
            <strong> {author.name}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
