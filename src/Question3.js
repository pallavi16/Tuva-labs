import React, { Component } from "react";

class Question3 extends Component {
  render() {
    return (
      <div>
        <h2 className ="fadeInText">QUESTION 3: <br/>
        Pick a CMS of your choice, and describe what kicking-off a new website project today
        would look like for you, in terms of:
        <ul>
        <li>What tools and stack make up your development environment?</li>
        <li>What are the components of your boilerplate or initial codebase?</li>
        Further, could you explain when would this particular CMS not be your first choice for a
        website. Share a couple examples or existing content websites.
        We’re not looking for any code or pseudo-code at this stage.
        </ul>
        </h2>
        <p className ="blurText"><strong>Picking a CMS: </strong>WordPress is usually my
        choice when it comes it picking a CMS since it has a flexible platform and easier
        navigation than most of the other CMS.
	<br/>
	<strong>Tools and web stack for website development: </strong>
<br/>
<b>Editor:</b> Sublime Text/ Atom
<br/>
<b>Browser:</b>  Mostly Chrome (for Dev tools) but I also ensure cross browser compatibility while testing.
<br/><b>Languages:</b> HTML5, CSS3
<br/><b>Design:</b> Mostly Illustrator or Photoshop
<br/><b>UI Packages:</b> Bootstrap
<br/><b>Version Control:</b> Github
<br/><b>JS Frameworks: </b>Angular/ React
<br/><b>Databases: </b>Usually MySQL/MongoDB
<br/><b>CSS Precompiler:</b> SASS
<br/><b>Deploy tools: </b>Licensed tools for professional work;  For prototypes, Heroku.

<br/><br/>
<b>	Why not WordPress? </b>
<ul>
<li>Website management with WordPress is really cumbersome and expensive as it needs constant fixes
and updation.</li>
<li>Code breaks and hacking is too frequent if the website is not managed properly and updated regularly.</li>
<li>Also, it won’t be a great choice in a website where speed and page load time is an important
requirement.
Since WordPress caters for different styles and features, some of which are left unused, the code is
usually bloated and needs a lot of processing which eventually leads to page loading slower.</li>
</ul>
<br/><br/>
<b>
Examples of existing content websites:</b>

<ul>
<li>The Walt Disney Company is one of the websites that are designed using Wordpress.
Since it uses a very basic template for its design to provide entertainment
and information for the users, it does not have the face the drawbacks that WordPress has.</li>
<li>Kate Perry website also uses WordPress as its CMS. The website has a simple white background
and easily navigable links, giving its users the option to listen, watch and learn easily and at
their convenience without a lot of animation that a lot of websites usually have.</li>
</ul>
        </p>
      </div>
    );
  }
}

export default Question3;
