<script>

        function myObjectType(){

            this.info = 'I am a shiny new object';

            this.showInfo = function(){

                alert(this.info);

            }

            this.setInfo = function (newInfo) {

                this.info = newInfo;

            }

        }

        var myNewObject1 = new myObjectType();

        var myNewObject2 = new myObjectType();

    </script>
