import React from "react";

import { List, ListInlineItem } from "reactstrap";

import {
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <List type="inline">
      <ListInlineItem
        className="Link"
        tag="a"
        href="https://github.com/fosajeff"
      >
        <FaGithubSquare />
      </ListInlineItem>
      <ListInlineItem
        className="Link"
        tag="a"
        href="https://twitter.com/efosa_j"
      >
        <FaLinkedin />
      </ListInlineItem>
      <ListInlineItem
        className="Link"
        tag="a"
        href="https://linkedin.com/in/jeffrey-okooboh-091a47191"
      >
        <FaTwitterSquare />
      </ListInlineItem>
      <ListInlineItem
        className="Link"
        tag="a"
        href="mailto:okoobohefosa@gmail.com"
      >
        <FaEnvelope />
      </ListInlineItem>
    </List>
  );
};

export default SocialIcons;
