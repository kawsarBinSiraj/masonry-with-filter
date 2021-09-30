/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {
    
     // init 
    // Masonry with filter
    $(function () {
       setTimeout(function(){
             // masonry init
            var masonry = new Masonry($('#masonry-grid-row').get()[0], {
                itemSelector: ".grid-thumbnail"
            });

            $grid = $('#masonry-grid-row').isotope({
                itemSelector: '.grid-thumbnail',
                layoutMode: 'masonry',
                masonry: {
                    gutter: 0
                }
            });

            // filter activity
            $('#filters').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
                $('#filters button').removeClass('btn-primary').addClass('btn-info');
                $(this).addClass('btn-primary').removeClass('btn-info');
            });
       }, 100)
        
        
    });
});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {


});
