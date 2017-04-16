import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'app',
    template: `
        <h1>Countries</h1>
        <div class="container">    
<router-outlet></router-outlet>
</div>
<br><br>
<footer class="container-fluid text-center">
</footer>
        `,      
})
export class AppComponent { }