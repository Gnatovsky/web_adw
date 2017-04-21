'use strict';

module.exports = function () {
  $.gulp.task('sprite:img', function () {
    var spriteData = $.gulp.src('source/images/sprite/**/*.png')
      .pipe($.gp.spritesmith({
          imgName: 'sprite.png',
          cssName: 'sprite.css',
          algorithm: 'binary-tree',
          imgPath: ($.config.root + '/img/sprite.png'),
          padding: 2
        })
      );
    var imgStream = spriteData.img
      .pipe($.buffer())
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + '/img'));
    var cssStream = spriteData.css
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/css'));
    return $.merge(imgStream, cssStream);
  });
};
