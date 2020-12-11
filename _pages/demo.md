---
title: Demo
permalink: /demo/
date: 2017-12-10T19:09:39+01:00
author: Yves
layout: page
---
# PAGE MARKUP AND FORMATTING

# Header one

## Header two

### Header three

#### Header four

##### Header five

###### Header six

## Blockquotes

Single line blockquote:

> Stay hungry. Stay foolish.

Multi line blockquote with a cite reference:

<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see <a href="https://developer.mozilla.org/en-US/docs/HTML/Element/blockquote#Notes">Notes</a> for how to change it). A URL for the source of the quotation may be given using the <strong>cite</strong> attribute, while a text representation of the source can be given using the <a title="The HTML Citation Element <cite> represents a reference to a creative work. It must include the title of a work or a URL reference, which may be in an abbreviated form according to the conventions used for the addition of citation metadata." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite"><code>&lt;cite&gt;</code></a> element.
  </p>
</blockquote>

<cite>multiple contributors</cite> &#8211; MDN HTML element reference &#8211; blockquote

## Tables

<table>
  <tr>
    <th>
      Employee
    </th>

    <th class="views">
      Salary
    </th>

    <th>
    </th>
  </tr>

  <tr class="odd">
    <td>
      <a href="http://example.com/">Jane</a>
    </td>

    <td>
      $1
    </td>

    <td>
      Because that&#8217;s all Steve Job&#8217; needed for a salary.
    </td>
  </tr>

  <tr class="even">
    <td>
      <a href="http://example.com">John</a>
    </td>

    <td>
      $100K
    </td>

    <td>
      For all the blogging he does.
    </td>
  </tr>

  <tr class="odd">
    <td>
      <a href="http://example.com/">Jane</a>
    </td>

    <td>
      $100M
    </td>

    <td>
      Pictures are worth a thousand words, right? So Tom x 1,000.
    </td>
  </tr>

  <tr class="even">
    <td>
      <a href="http://example.com/">Jane</a>
    </td>

    <td>
      $100B
    </td>

    <td>
      With hair like that?! Enough said&#8230;
    </td>
  </tr>
</table>

## Definition Lists

Definition List Title
:   Definition list division.

Startup
:   A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.

#dowork
:   Coined by Rob Dyrdek and his personal body guard Christopher &#8220;Big Black&#8221; Boykins, &#8220;Do Work&#8221; works as a self motivator, to motivating your friends.

Do It Live
:   I&#8217;ll let Bill O&#8217;Reilly will [explain](https://www.youtube.com/watch?v=O_HyZ5aW76c "We'll Do It Live") this one.

## Unordered Lists (Nested)

  * List item one
      * List item one
          * List item one
          * List item two
          * List item three
          * List item four
      * List item two
      * List item three
      * List item four
  * List item two
  * List item three
  * List item four

## Ordered List (Nested)

<ol start="8">
  <li>
    List item one -start at 8 <ol>
      <li>
        List item one <ol reversed="reversed">
          <li>
            List item one -reversed attribute
          </li>
          <li>
            List item two
          </li>
          <li>
            List item three
          </li>
          <li>
            List item four
          </li>
        </ol>
      </li>

      <li>
        List item two
      </li>
      <li>
        List item three
      </li>
      <li>
        List item four
      </li>
    </ol>
  </li>

  <li>
    List item two
  </li>
  <li>
    List item three
  </li>
  <li>
    List item four
  </li>
</ol>

## HTML Tags

These supported tags come from the WordPress.com code [FAQ](http://en.support.wordpress.com/code/ "Code").

**Address Tag**

<address>
  1 Infinite Loop<br /> Cupertino, CA 95014<br /> United States
</address>

**Anchor Tag (aka. Link)**

This is an example of a [link](http://apple.com "Apple").

**Abbreviation Tag**

The abbreviation srsly stands for &#8220;seriously&#8221;.

**Acronym Tag (_deprecated in HTML5_)**

The acronym <acronym title="For The Win">ftw</acronym> stands for &#8220;for the win&#8221;.

**Big Tag** (_deprecated in HTML5_)

These tests are a <big>big</big> deal, but this tag is no longer supported in HTML5.

**Cite Tag**

&#8220;Code is poetry.&#8221; &#8212;<cite>Automattic</cite>

**Code Tag**

This tag styles blocks of code.  
`.post-title {<br />
margin: 0 0 5px;<br />
font-weight: bold;<br />
font-size: 38px;<br />
line-height: 1.2;<br />
and here's a line of some really, really, really, really long text, just to see how it is handled and to find out how it overflows;<br />
}`  
You will learn later on in these tests that word-wrap: break-word;will be your best friend.

**Delete Tag**

This tag will let you <del cite="deleted it">strike out text</del>, but this tag is _recommended_ supported in HTML5 (use the `<s>` instead).

**Emphasize Tag**

The emphasize tag should _italicize_ _text_.

**Horizontal Rule Tag**

* * *

This sentence is following a `<hr />` tag.

**Insert Tag**

This tag should denote <ins cite="inserted it">inserted</ins> text.

**Keyboard Tag**

This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` tag.

**Preformatted Tag**

This tag is for preserving whitespace as typed, such as in poetry or ASCII art.

## The Road Not Taken

<cite>Robert Frost</cite> Two roads diverged in a yellow wood, And sorry I could not travel both (\_/) And be one traveler, long I stood (=&#8217;.&#8217;=) And looked down one as far as I could (&#8220;)\_(&#8220;) To where it bent in the undergrowth; Then took the other, as just as fair, And having perhaps the better claim, |\\_/| Because it was grassy and wanted wear; / @ @ \ Though as for that the passing there ( > º < ) Had worn them really about the same, \`>>x< <´ / O \ And both that morning equally lay In leaves no step had trodden black. Oh, I kept the first for another day! Yet knowing how way leads on to way, I doubted if I should ever come back. I shall be telling this with a sigh Somewhere ages and ages hence: Two roads diverged in a wood, and I— I took the one less traveled by, And that has made all the difference. and here&#8217;s a line of some really, really, really, really long text, just to see how it is handled and to find out how it overflows;

**Quote Tag** for short, inline quotes

<q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer

**Strike Tag** (_deprecated in HTML5_) and **S Tag**

This tag shows <span style="text-decoration: line-through;">strike-through</span> <s>text</s>.

**Small Tag**

This tag shows <small>smaller</small> <small>text.</small>

**Strong Tag**

This tag shows **bold** **text.**

**Subscript Tag**

Getting our science styling on with H<sub>2</sub>O, which should push the &#8220;2&#8221; down.

**Superscript Tag**

Still sticking with science and Isaac Newton&#8217;s E = MC<sup>2</sup>, which should lift the 2 up.

**Teletype Tag** (_obsolete in HTML5_)

This rarely used tag emulates <tt>teletype text</tt>, which is usually styled like the `<code>` tag.

**Underline Tag** _deprecated in HTML 4, re-introduced in HTML5 with other semantics_

This tag shows <u>underlined text</u>.

**Variable Tag**

This allows you to denote <var>variables</var>.

# Page Image Alignment

Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let&#8217;s get started.

On the topic of alignment, it should be noted that users can choose from the options of _None_, _Left_, _Right,_ and _Center_. In addition, they also get the options of _Thumbnail_, _Medium_, _Large_ & _Fullsize_.

<p style="text-align: center;">
  <a href="/demo/image-alignment-580x300/" rel="attachment wp-att-3933"><img class="size-full wp-image-3933 aligncenter" src="/images/uploads/2017/12/image-alignment-580x300.jpg" alt="" width="580" height="300" /></a>
</p>

The image above happens to be _**centered**_.

<a href="/demo/image-alignment-150x150/" rel="attachment wp-att-3934"><img class="size-full wp-image-3934 alignleft" src="/images/uploads/2017/12/image-alignment-150x150.jpg" alt="" width="150" height="150" /></a>  
The rest of this paragraph is filler for the sake of seeing the text wrap around the 150&#215;150 image, which is _**left aligned**_.

As you can see the should be some space above, below, and to the right of the image. The text should not be creeping on the image. Creeping is just not right. Images need breathing room too. Let them speak like you words. Let them do their jobs without any hassle from the text. In about one more sentence here, we&#8217;ll see that the text moves from the right of the image down below the image in seamless transition. Again, letting the do it&#8217;s thang. Mission accomplished!

And now for a _**massively large image**_. It also has _**no alignment**_.

<a href="/demo/image-alignment-1200x4002/" rel="attachment wp-att-3936"><img class="alignnone size-full wp-image-3936" src="/images/uploads/2017/12/image-alignment-1200x4002.jpg" alt="" width="1200" height="400" srcset="/images/uploads/2017/12/image-alignment-1200x4002.jpg 1200w, /images/uploads/2017/12/image-alignment-1200x4002-624x208.jpg 624w" sizes="(max-width: 1200px) 100vw, 1200px" /></a>

&nbsp;

The image above, though 1200px wide, should not overflow the content area. It should remain contained with no visible disruption to the flow of content.

<a href="/demo/image-alignment-300x200/" rel="attachment wp-att-3937"><img class="size-full wp-image-3937 alignright" src="/images/uploads/2017/12/image-alignment-300x200.jpg" alt="" width="300" height="200" /></a>

And now we&#8217;re going to shift things to the _**right align**_. Again, there should be plenty of room above, below, and to the left of the image. Just look at him there&#8230; Hey guy! Way to rock that right side. I don&#8217;t care what the left aligned image says, you look great. Don&#8217;t let anyone else tell you differently.

In just a bit here, you should see the text start to wrap below the right aligned image and settle in nicely. There should still be plenty of room and everything should be sitting pretty. Yeah&#8230; Just like that. It never felt so good to be right.

And just when you thought we were done, we&#8217;re going to do them all over again with captions!

<figure id="attachment_3933" aria-describedby="caption-attachment-3933" style="width: 580px" class="wp-caption aligncenter"><a href="/demo/image-alignment-580x300/" rel="attachment wp-att-3933"><img class="wp-image-3933 size-full" src="/images/uploads/2017/12/image-alignment-580x300.jpg" alt="" width="580" height="300" /></a><figcaption id="caption-attachment-3933" class="wp-caption-text">Look at 580&#215;300 getting some [caption](http://en.support.wordpress.com/images/image-settings/ "Image Settings") love.</figcaption></figure>

The image above happens to be _**centered**_. The caption also has a link in it, just to see if it does anything funky.

<figure id="attachment_3934" aria-describedby="caption-attachment-3934" style="width: 150px" class="wp-caption alignleft"><a href="/demo/image-alignment-150x150/" rel="attachment wp-att-3934"><img class="wp-image-3934 size-full" src="/images/uploads/2017/12/image-alignment-150x150.jpg" alt="" width="150" height="150" /></a><figcaption id="caption-attachment-3934" class="wp-caption-text">Itty-bitty caption.</figcaption></figure>

The rest of this paragraph is filler for the sake of seeing the text wrap around the 150&#215;150 image, which is _**left aligned**_.

As you can see the should be some space above, below, and to the right of the image. The text should not be creeping on the image. Creeping is just not right. Images need breathing room too. Let them speak like you words. Let them do their jobs without any hassle from the text. In about one more sentence here, we&#8217;ll see that the text moves from the right of the image down below the image in seamless transition. Again, letting the do it&#8217;s thang. Mission accomplished!

And now for a _**massively large image**_. It also has _**no alignment**_.

<figure id="attachment_3936" aria-describedby="caption-attachment-3936" style="width: 1200px" class="wp-caption alignnone"><a href="/demo/image-alignment-1200x4002/" rel="attachment wp-att-3936"><img class="wp-image-3936 size-full" src="/images/uploads/2017/12/image-alignment-1200x4002.jpg" alt="" width="1200" height="400" srcset="/images/uploads/2017/12/image-alignment-1200x4002.jpg 1200w, /images/uploads/2017/12/image-alignment-1200x4002-624x208.jpg 624w" sizes="(max-width: 1200px) 100vw, 1200px" /></a><figcaption id="caption-attachment-3936" class="wp-caption-text">Massive image comment for your eyeballs.</figcaption></figure>

The image above, though 1200px wide, should not overflow the content area. It should remain contained with no visible disruption to the flow of content.

<figure id="attachment_3937" aria-describedby="caption-attachment-3937" style="width: 300px" class="wp-caption alignright"><a href="/demo/image-alignment-300x200/" rel="attachment wp-att-3937"><img class="wp-image-3937 size-full" src="/images/uploads/2017/12/image-alignment-300x200.jpg" alt="" width="300" height="200" /></a><figcaption id="caption-attachment-3937" class="wp-caption-text">Feels good to be right all the time.</figcaption></figure>

And now we&#8217;re going to shift things to the _**right align**_. Again, there should be plenty of room above, below, and to the left of the image. Just look at him there&#8230; Hey guy! Way to rock that right side. I don&#8217;t care what the left aligned image says, you look great. Don&#8217;t let anyone else tell you differently.

In just a bit here, you should see the text start to wrap below the right aligned image and settle in nicely. There should still be plenty of room and everything should be sitting pretty. Yeah&#8230; Just like that. It never felt so good to be right.

And that&#8217;s a wrap, yo! You survived the tumultuous waters of alignment. Image alignment achievement unlocked!



# Clearing Floats

The last item in this page&#8217;s content is a thumbnail floated left. There should be page links following it. Make sure any elements after the content are clearing properly.

The float is cleared when it does not stick out the bottom of the parent container, and when other elements that follow it do not wrap around the floated element.

<a href="/dancing-feet/dancing-feet-storyboard_063/" rel="attachment wp-att-3716"><img class="alignnone wp-image-3716 size-thumbnail" src="/images/uploads/2017/07/dancing-feet-storyboard_063-312x193.jpg" alt="" width="312" height="193" srcset="/images/uploads/2017/07/dancing-feet-storyboard_063-312x193.jpg 312w, /images/uploads/2017/07/dancing-feet-storyboard_063-624x386.jpg 624w" sizes="(max-width: 312px) 100vw, 312px" /></a> <!--nextpage-->This is the second page
