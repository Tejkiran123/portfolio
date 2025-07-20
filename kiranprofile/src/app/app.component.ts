import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterLink]
})
export class AppComponent implements OnInit {

  year: string ='February 2023 - Present'
  year2: string ='March 2021 - February 2023'
  title = 'kiranprofile';
  emailId: string ="kavalitejkiran123@gmail.com"
  phoneNumber: string = '+91-8096676791'
  linkdIn: string = 'tejkiran.linkdin'
  professionalSummary: string = 'PROFESSIONAL SUMMARY'
  languages:string = 'Languages:'
  progarmmingLangs: string = ` JavaScript, TypeScript, HTML5, CSS3`
  frameWorkTitle: string = 'Framework'
  frameWorkLang: string = ` Angular(v11+)`
  summaryContent: string = `Results driven Frontend Angular Developer with 4+ years of hands-on experience in designing, developing, and deploying 
  robust, scalable, and user-friendly web applications. Proficient in Angular, TypeScript, JavaScript, HTML5, CSS3 and RxJS. 
  Demonstrated expertise in front-end architecture, component-based development, and API integration. Proven ability to 
  develop user-friendly features, optimize website performance, and collaborate effectively within cross-functional teams to 
  deliver high-quality applications that meet user needs and business objectives.`
  skillsValue!: ({ Languages: string[]; Framework?: undefined; Testing?: undefined; 'Development Tools'?: undefined; 'Version Control System'?: undefined; } | { Framework: string[]; Languages?: undefined; Testing?: undefined; 'Development Tools'?: undefined; 'Version Control System'?: undefined; } | { Testing: string[]; Languages?: undefined; Framework?: undefined; 'Development Tools'?: undefined; 'Version Control System'?: undefined; } | { 'Development Tools': string[]; Languages?: undefined; Framework?: undefined; Testing?: undefined; 'Version Control System'?: undefined; } | { 'Version Control System': string[]; Languages?: undefined; Framework?: undefined; Testing?: undefined; 'Development Tools'?: undefined; })[];
  expDetails!: ({ 'Feature Development': string; 'Performance Optimization:'?: undefined; 'Bug Fixing'?: undefined; Collaboration?: undefined; 'Code Quality'?: undefined; Deployment?: undefined; 'Agile Practices'?: undefined; 'User Experience'?: undefined; 'Training and Mentorship'?: undefined; } | { 'Performance Optimization:': string; 'Feature Development'?: undefined; 'Bug Fixing'?: undefined; Collaboration?: undefined; 'Code Quality'?: undefined; Deployment?: undefined; 'Agile Practices'?: undefined; 'User Experience'?: undefined; 'Training and Mentorship'?: undefined; } | { 'Bug Fixing': string; 'Feature Development'?: undefined; 'Performance Optimization:'?: undefined; Collaboration?: undefined; 'Code Quality'?: undefined; Deployment?: undefined; 'Agile Practices'?: undefined; 'User Experience'?: undefined; 'Training and Mentorship'?: undefined; } | { Collaboration: string; 'Feature Development'?: undefined; 'Performance Optimization:'?: undefined; 'Bug Fixing'?: undefined; 'Code Quality'?: undefined; Deployment?: undefined; 'Agile Practices'?: undefined; 'User Experience'?: undefined; 'Training and Mentorship'?: undefined; } | { 'Code Quality': string; 'Feature Development'?: undefined; 'Performance Optimization:'?: undefined; 'Bug Fixing'?: undefined; Collaboration?: undefined; Deployment?: undefined; 'Agile Practices'?: undefined; 'User Experience'?: undefined; 'Training and Mentorship'?: undefined; } | { Deployment: string; 'Feature Development'?: undefined; 'Performance Optimization:'?: undefined; 'Bug Fixing'?: undefined; Collaboration?: undefined; 'Code Quality'?: undefined; 'Agile Practices'?: undefined; 'User Experience'?: undefined; 'Training and Mentorship'?: undefined; } | { 'Agile Practices': string; 'Feature Development'?: undefined; 'Performance Optimization:'?: undefined; 'Bug Fixing'?: undefined; Collaboration?: undefined; 'Code Quality'?: undefined; Deployment?: undefined; 'User Experience'?: undefined; 'Training and Mentorship'?: undefined; } | { 'User Experience': string; 'Feature Development'?: undefined; 'Performance Optimization:'?: undefined; 'Bug Fixing'?: undefined; Collaboration?: undefined; 'Code Quality'?: undefined; Deployment?: undefined; 'Agile Practices'?: undefined; 'Training and Mentorship'?: undefined; } | { 'Training and Mentorship': string; 'Feature Development'?: undefined; 'Performance Optimization:'?: undefined; 'Bug Fixing'?: undefined; Collaboration?: undefined; 'Code Quality'?: undefined; Deployment?: undefined; 'Agile Practices'?: undefined; 'User Experience'?: undefined; })[];
  expDetails2!: string[];
  certificationsData=[
    `Microsoft Azure Fundamentals (AZ-900)`,
    `Microsoft Azure Al Fundamentals (Al-900)`
  ]
  education=`Bachelor of Technology, Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad (2016 - 2020)`

  constructor(private readonly skillsService: DataService){}
  ngOnInit(): void {
    this.skillsDetails();
    this.workExperienceDetails();
  }

  skillsDetails(){
    this.skillsService.skills().subscribe(res=>{
      this.skillsValue  = res
    })
  }

  workExperienceDetails(){
    this.skillsService.workExperience().subscribe(exp => {
      this.expDetails = exp;
    })
    this.skillsService.workExperience2().subscribe(exp2=>{
      this.expDetails2 = exp2;
    })
  }
}
