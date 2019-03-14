jQuery(document).ready(function($) {

    /* click on painter button */
    var painter_add_edit_click_handler = function(e) {

        /* needed for insert operation */
        //open_fieldtype_rotation_ref = $(this).parent().parent();

        var space_id = $(e.target).attr('data-space-id');
        var contenttype_name = $(e.target).attr('data-contenttype-name');
        var scene_template = $(e.target).attr('data-scene-template');

        //var subject_type = $(e.target).attr('data-subject-field-type');
        //var subject_name = $(e.target).attr('data-subject-field-name');
        //var subject_label = $(e.target).attr('data-subject-field-label');

        //var subject_id = '';
        //subject_id = $('input[name="' + subject_name + '"]').val();


        $('#painter-target').load(window.ideaspace_site_path + '/admin/space/' + space_id + '/edit/' + contenttype_name + '/painter/template/' + scene_template, function() {

            /* set height dynamically, because of mobile */
            $('#painter .modal-body a-scene').css('max-height', '700px');
            $('#painter .modal-body a-scene').css('height', $(window).height() * 0.7);

            //$('#rotation .modal-title').text($('#rotation .modal-title').text() + ' ' + subject_label);

            $('#painter').on('shown.bs.modal', function() {

                /* trigger resize event, otherwise canvas is not showing up */
                var evt = window.document.createEvent('UIEvents');
                evt.initUIEvent('resize', true, false, window, 0);
                window.dispatchEvent(evt);

                /*if (open_fieldtype_rotation_ref.find('.rotation-info').val() != '') {


                }*/ 



                //$('#painter-target .insert-btn').unbind('click');
                //$('#painter-target .insert-btn').click(painter_insert_click_handler);
    
            });

        
            /* remove children after closing, otherwise there can be conflicts when loading a-frame assets via loading component */  
            $('#painter-target .modal').on('hidden.bs.modal', function() {
                $('#painter-target').empty();
            });


            $('#painter').modal('show');

        });

    };
    $('.add-edit-painter-btn').unbind('click');
    $('.add-edit-painter-btn').click(painter_add_edit_click_handler);


    /*var painter_insert_click_handler = function() {

        //var field_type = open_fieldtype_rotation_ref.find('.add-edit-rotation-btn').attr('data-subject-field-type');


        //open_fieldtype_rotation_ref.find('.rotation-info').val(info);

        if (open_fieldtype_rotation_ref.find('.rotation-add').css('display') != 'none') {
            open_fieldtype_rotation_ref.find('.rotation-add').hide();
            open_fieldtype_rotation_ref.find('.rotation-edit').show();
        }

        location.hash = '#' + open_fieldtype_rotation_ref.parent().attr('id');
    };*/


    var painter_remove_click_handler = function(e) {

        //$(this).parent().parent().find('.rotation-info').val('');
        $(this).parent().parent().find('.painter-add').show();
        $(this).parent().parent().find('.painter-edit').hide();
    };
    $('.form-control-add-painter .painter-edit .remove-painter-btn').click(painter_remove_click_handler);          
 
});

