// lucide-icons.module.ts
import { NgModule } from '@angular/core';
import { LucideAngularModule, Linkedin, Github, Globe } from 'lucide-angular';

@NgModule({
 imports: [LucideAngularModule.pick({Linkedin, Github, Globe})],
 exports: [LucideAngularModule]
})
export class LucideIconsModule { }
