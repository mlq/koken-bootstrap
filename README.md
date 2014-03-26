koken-bootstrap
===============

koken-bootstrap is a very basic theme for [Koken](http://koken.me) that builds upon the [Bootstrap](http://getbootstrap.com) framework and uses the iconic font [Font Awesome](http://fortawesome.github.io/Font-Awesome). It implements all necessary lens templates in a simple manner by using components of the [Bootstrap](http://getbootstrap.com) framework. The purpose of its existence is to offer a starting point for new themes that are using the [Bootstrap](http://getbootstrap.com) framework.

Features
--------

  * All the features of [Bootstrap](http://getbootstrap.com)
  * Built with [LESS](http://lesscss.org)
  * [Font Awesome](http://fortawesome.github.io/Font-Awesome) icons
  * [Grunt](http://grunt.js) is used to build, preview and test your template
  * Package management with [Bower](http://bower.io/)
  * Responsive design

Installation
------------

To build koken-bootstrup just run the following commands:

    $ npm install
    $ grunt init
    $ grunt

From now on you just need to run `grunt` or `grunt build` to build the template.
If you want to automatically detect changes and update the final output in dist,
you can simply run `grunt watch`.

Once you have build the theme, copy the "dist" directory to your
Koken's installation `koken/storage/themes` directory to see it in action.

Supported templates
-------------------

  * Index - *The start page*
  * Albums - *Overview and detailed view of albums*
  * Essays - *Blog-like overview and detailed view of an entry*
  * Sets - *Overview and detailed view of sets*
  * Favorites - *Favorite content*
  * Archives (Album, Essay, Content) - *Archive pages*
  * Categories - *Overview and detailed view of categories*
  * Tags - *Overview and detailed view of tags*
  * Timeline - *Timeline of every recent changes and updates*
