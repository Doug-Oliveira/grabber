import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        $( document ).ready(function() {
            console.log( "Jquery Works good!!" );
        });
    }
}