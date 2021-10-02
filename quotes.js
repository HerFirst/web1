const quotes = [
	{ quote: "작은 기회로 부터 종종 위대한 업적이 시작된다", author: "데모스테네스" },
	{ quote: "인생이란 학교에는 불행 이란 훌륭한 스승이 있다.그 스승 때문에 우리는 더욱 단련되는 것이다.", author: "프리체" },
	{ quote: "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다", author: "헨렌 켈러" },
	{ quote: "도저히 손댈 수가 없는 곤란에 부딪혔다면 과감하게 그 속으로 뛰어들라.그리하면 불가능하다고 생각했던 일이 가능해진다.", author: "데일 카네기" },
	{ quote: "용기있는 자로 살아라.운이 따라주지 않는다면 용기 있는 가슴으로 불행에 맞서라.", author: "키케로" },
	{ quote: "최고에 도달하려면 최저에서 시작하라.", author: "P.시루스" },
	{ quote: "내 비장의 무기는 아직 손안에 있다.그것은 희망이다", author: "나폴레옹" },
	{ quote: "문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다.", author: "메이벨 뉴컴버" },
	{ quote: "한 번 실패와 영원한 실패를 혼동하지 마라.", author: "F.스콧 핏제랄드" },
	{ quote: "인간의 삶 전체는 단지 한 순간에 불과하다.인생을 즐기자", author: "플루타르코스" },
]

const quote = document.querySelector('#quote span')
const author = document.querySelector('#quote :nth-child(2)')

const random = Math.floor(Math.random()*quotes.length)

author.innerText = `${quotes[random].author}`
quote.innerText = `${quotes[random].quote}`