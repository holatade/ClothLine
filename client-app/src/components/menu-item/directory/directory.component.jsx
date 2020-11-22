import React from "react";
import MenuItem from "../menu-item.component";
import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,         
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 2,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 2,
          linkUrl: "shop/jackets",
          size:'large',
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: 2,
          linkUrl: "shop/jackets",
          size:'large'
        },
      ],
    };
  }

  render() {
      const {sections} = this.state
    return (
      <div className="directory-menu">
          {sections.map(section => <MenuItem key={section.id} {...section}/>)}
      </div>
    );
  }
}

export default Directory;
