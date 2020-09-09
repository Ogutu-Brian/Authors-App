// react libraries
import * as React from 'react';

// components
import CardsDisplay from '../../components/CardsDisplay'
import TableDisplay from '../../components/TableDisplay';

// interfaces
import { ArticlesViewProps, ArticlesViewState } from './interfaces';

class ArticlesView extends React.Component<ArticlesViewProps, ArticlesViewState> {
  render() {
    const { articles, displayTable } = this.props;

    return (
      <React.Fragment>
        {!displayTable
          ? <CardsDisplay
            articles={articles}
          /> :
          <TableDisplay
            articles={articles}
            deleteArticle={this.props.deleteArticle}
            markAsRead={this.props.markAsRead}
          />}
      </React.Fragment>
    )
  }
}

export default ArticlesView;
