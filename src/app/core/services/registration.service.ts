import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseService} from '@core/services/base.service';
import {catchError, map} from 'rxjs/operators';
import {MemberLookup} from '@core/models/member-lookup.model';

/**
 * Registration Service
 * <p>Used to supply registration components with API calls.</p>
 */
@Injectable({
  providedIn: 'root'
})
export class RegistrationService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Look up member returns a boolean that represents
   * the existence of a member with the provided
   * MemberLookup object.
   * @param memberLookup Contains PII of the member to look up.
   * @return Observable of a boolean.
   */
  lookUpMember(memberLookup: MemberLookup): Observable<boolean> {
    return this.http.post(this.getApi('/member-lookups'), memberLookup, {observe: 'response'})
      .pipe(catchError(this.handleError))
      .pipe(map(res => res.status === 200));
  }

}
