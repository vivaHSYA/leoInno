import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  // 페이지가 로드될 때 바로 홈 화면으로 리다이렉션
  useEffect(() => {
    router.push('/');
  }, []);

  return null; // 빈 화면을 반환하거나 필요한 내용을 추가합니다.
}