# WorldCat Discovery formats and subformats #

To add scoping by format, use the table below to find the correct format/subformat value to add
to an `<input/>` object. The column in which the value is located corresponds to the object's
`name` attribute.

## Example ##

```html
<!-- to search across all audiobook formats -->
<input type="text" name="queryString" placeholder="Search Our Audiobook Collection"/>
<input type="hidden" name="format" value="Audiobook"/>
```

```html
<!-- to search only eBooks  -->
<input type="text" name="queryString" placeholder="Search Our eBook Collection" />
<input type="hidden" name="subformat" value="Book::book_digital"/>
```
===

  format    |           subformat            | what it targets
------------|--------------------------------|----------------------
`all`       |                                | All formats
`Artchap`   |                                | Articles + chapters
            | `Artchap::artchap_artcl`       | Articles
            | `Artchap::artchap_chptr`       | Chapter
            | `Artchap::artchap_digital`     | Downloadable article
`Archv`     |                                | Archival material
            | `Archv::archv_digital`         | Downloadable archival material
`Audiobook` |                                | All audiobooks
            | `Audiobook::audiobook_cassette`| Audiobook on cassette
            | `Audiobook::audiobook_cd`      | Audiobook on cd
            | `Audiobook::audiobook_digital` | eAudiobook
            | `Audiobook::audiobook_lp`      | Audiobook on lp
`Book`      |                                | All books
            | `Book::book_braille`           | Braille book
            | `Book::book_continuing`        | Continually updated resource
            | `Book::book_digital`           | eBooks
            | `Book::book_largeprint`        | Large print book
            | `Book::book_mic`               | Microform
            | `Book::book_printbook`         | Print book
            | `Book::book_thsis`             | Thesis/dissertation
`Compfile`  |                                | All computer files
            | `Compfile::compfile_digital`   | Computer file 
`Encyc`     |                                | Encyclopedia article
`Game`      |                                | Game
`Image`     |                                | Image
            | `Image::image_2d`              | Image (2d)
`Intmm`     |                                | Interactive multimedia
`Jrnl`      |                                | Journal / Magazine
            | `Jrnl::jrnl_digital`           | eJournal / eMagazine
`Kit`       |                                | Kit
`Map`       |                                | Map
            | `Map::map_digital`             | Downloadable map
`Music`     |                                | All music
            | `Music::music_cassette`        | Cassette
            | `Music::music_cd`              | CD
            | `Music::music_digital`         | eMusic
            | `Music::music_lp`              | LP
`Msscr`     |                                | All musical scores
            | `Msscr::msscr_digital`         | Downloadable musical score
`News`      |                                | Newspaper
            | `News::news_digital`           | eNewspaper
`Object`    |                                | Object
            | `Object::object_digital`       | Object (digital)
`Snd`       |                                | Sound Recording
`Toy`       |                                | Toy
`Video`     |                                | All videos
            | `Video::video_bluray`          | Bluray video
            | `Video::video_digital`         | eVideo
            | `Video::video_dvd`             | DVD video
            | `Video::video_film`            | Film
            | `Video::video_vhs`             | VHS video
`Vis`       |                                | Visual Material
            | `Vis::vis_digital`             | Downloadable visual material
`Web`       |                                | Internet Resource
            | `Web::web_dwn2d`               | Downloadable image
            | `Web::web_digital`             | Website
