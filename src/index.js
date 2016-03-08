import Button from '@economist/component-link-button';
import List from '@economist/component-list';
import React from 'react';

function renderListContent(linkList) {
  return linkList.map((link, i) => {
    const commonProps = {
      key: `${ i }`,
      unstyled: true,
      ...link,
    };
    if (link.internal === false) {
      return (
        <Button
          key={`sections-card__link_${ i }`}
          className="sections-card__link sections-card__link--external"
          {...commonProps}
          target="_blank"
          unstyled
        >
          {link.title}
        </Button>
      );
    }
    return (
      <Button
        key={`sections-card__link_${ i }`}
        className="sections-card__link"
        {...commonProps}
        unstyled
      >
      {link.title}
    </Button>);
  });
}

function SectionsCard({ data, titles }) { // eslint-disable-line id-blacklist
  const sectionsCardData = data; // eslint-disable-line id-blacklist
  const sections = [];
  if (titles.sections) {
    sections.push(<h4 className="sections-card__header">{titles.sections}</h4>);
  }
  sections.push(
    <List>
      {renderListContent(sectionsCardData.sections)}
    </List>
  );
  const blogs = [];
  if (titles.blogs) {
    blogs.push(<h4 className="sections-card__header">{titles.blogs}</h4>);
  }
  blogs.push(
    <List>
      {renderListContent(sectionsCardData.blogs)}
    </List>
  );

  return (
    <nav role="nav" className="sections-card">
      <div className="sections-card__wrapper">
        <div className="sections-card__menu">
          <div className="sections-card__list sections-card__list-sections">
            {sections}
          </div>
          <div className="sections-card__list sections-card__list-media">
            <List>
              {renderListContent(sectionsCardData.media)}
            </List>
          </div>
          <div className="sections-card__list sections-card__list-blogs">
            {blogs}
          </div>
        </div>
      </div>
    </nav>
  );
}

if (process.env.NODE_ENV !== 'production') {
  SectionsCard.propTypes = {
    data: React.PropTypes.shape({ // eslint-disable-line id-blacklist
      blogs: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          href: React.PropTypes.string,
          title: React.PropTypes.string,
        })
      ),
      media: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          href: React.PropTypes.string,
          title: React.PropTypes.string,
        })
      ),
      sections: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          href: React.PropTypes.string,
          title: React.PropTypes.string,
        })
      ),
    }),
    titles: React.PropTypes.shape({
      blogs: React.PropTypes.string,
      sections: React.PropTypes.string,
    }),
  };
}

SectionsCard.defaultProps = {
  titles: {
    blogs: 'Blogs',
  },
};

export default SectionsCard;
