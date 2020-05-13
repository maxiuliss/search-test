import { NgModule, ModuleWithProviders } from '@angular/core';
import { MerchantRepository } from './merchant.repository';
import { UserRepository } from './user.repository';
import { APP_INITIALIZER } from '@angular/core';

export function loadMerchants(repo: MerchantRepository) {
  const result = () => repo.load$();
  return result;
}

export function loadUsers(repo: UserRepository) {
  const result = () => repo.load$();
  return result;
}

@NgModule({
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadMerchants,
      deps: [MerchantRepository], multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: loadUsers,
      deps: [UserRepository],
      multi: true
    }]
})
export class DataModule {
  public static forRoot(): ModuleWithProviders<DataModule> {
    return {
      ngModule: DataModule,
      providers: [
        MerchantRepository,
        UserRepository
      ]
    };
  }
}
