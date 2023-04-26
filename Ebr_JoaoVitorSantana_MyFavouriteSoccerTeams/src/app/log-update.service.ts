import { Component, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class LogUpdateService {

  constructor(private updates: SwUpdate, private snackBar: MatSnackBar, private updateService: LogUpdateService) {}
    public init(){
      this.updates.versionUpdates.subscribe((event: { type: any; version: { hash: any; }; currentVersion: { hash: any; }; latestVersion: { hash: any; }; }) => {
      switch (event.type) {
      case 'Version detected':
      console.log(`Downloading new version:
      ${event.version.hash}`);
      break;
      case 'Version ready':
      console.log(`app version:
      ${event.currentVersion.hash}`);
      console.log(`New version:
      ${event.latestVersion.hash}`);
      break;
      } });
      }
}