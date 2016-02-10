import React from 'react';
import List from '@economist/component-list';
import Icon from '@economist/component-icon';
import Button from '@economist/component-link-button';

export default class SectionsCard extends React.Component {

  static get propTypes() {
    return {
      data: React.PropTypes.object,
    };
  }
  targetIfNeeded({ internal }) {
    if (internal === false) {
      return { target: '_blank' };
    }
    return {};
  }
  renderListContent(array) {
    return array.map((item, i) => {
      let linkContents = item.title;
      const commonProps = {
        key: `${i}`,
        unstyled: true,
        ...item,
      };
      if (item.internal === false) {
        return (
          <Button
            className="sections-card__link sections-card__link--external"
            {...commonProps}
            target="_blank"
            unstyled
          >
            {linkContents}
          </Button>
        );
      }
      return (<Button
                className="sections-card__link"
                {...commonProps}
                unstyled
              >
        {linkContents}
      </Button>);
    });
  }
  render() {
    const context = this.props.data;
    return (
      <nav role="nav" className="sections-card">
        <div className="sections-card__wrapper">
          <div className="sections-card__menu">
            <div className="sections-card__list sections-card__list-sections">
              <List>
                {this.renderListContent(context.sections)}
              </List>
            </div>
            <div className="sections-card__list sections-card__list-media">
              <List>
                {this.renderListContent(context.media)}
              </List>
            </div>
            <div className="sections-card__list sections-card__list-blogs">
              <h4 className="sections-card__header">Blogs</h4>
              <List>
                {this.renderListContent(context.blogs)}
              </List>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
