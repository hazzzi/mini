import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (request.geo?.latitude && request.geo?.longitude) {
    response.headers.set('x-latitude', request.geo.latitude);
    response.headers.set('x-longitude', request.geo.longitude);
  }
  
  return response;
}
