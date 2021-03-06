const faker = require("faker");
const fs = require("fs");
/* Generate Images */

const ListGame = [
  {
    id: 1,
    release: "2019-12-11",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041404087414834/qua-cau.png?width=1383&height=598",
    caption: "Qua cầu",
    description:
      "Cross The Bridge là trò chơi Xây dựng một cây cầu với kích thước chính xác và băng qua phía bên kia, đi càng xa càng tốt, mọi cấp độ đều khó khăn hơn. Cố gắng xây dựng Cầu của riêng bạn bằng cách cạnh tranh với những người khác để có được các khối có thể sưu tầm được! Bạn nên tìm kiếm những kẻ cướp bóc tiềm năng. Các tính năng chính của trò chơi bao gồm: tùy chỉnh màu sắc của nhân vật và khối: Bạn có thể chơi với hơn 80 loại nhân vật khác nhau, chọn hơn 30 khối và hơn 30 màu! Tùy chỉnh da nhân vật của bạn mà còn cả màu sắc của nhân vật! Gói: Bạn cũng có thể nhận các gói chứa các ký tự thú vị, các khối và hoạt ảnh nhân vật độc đáo! Bản đồ đường đi: Bạn có thể xem bản đồ đường đi của mình và quay lại mức cũ để đạt được kết quả tốt hơn, thậm chí có thể hoàn hảo hơn! Bạn có thể chơi trên khắp thế giới ở các thành phố khác nhau! Bảng xếp hạng: Hãy nhanh hơn và thu thập nhiều hơn và nhận được nhiều sao hơn để leo lên trong bảng xếp hạng!",
    link: "https://codepen.io/HunorMarton/full/xxOMQKg",
  },
  {
    id: 2,
    release: "2018-04-06",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041372672090132/ban-chim.png?width=1383&height=600",
    caption: "Bắn chim",
    description:
      "SHOOT DUCK là một trò chơi săn chim phiêu lưu mạo hiểm mới được phát hành, bây giờ bạn có thể trải nghiệm cuộc sống thực sự săn chim trên thiết bị di động! Nó mang đến cho bạn trải nghiệm mô phỏng chim bay thực sự và trải nghiệm bắn súng ShortGun với rất nhiều loài chim. Phát triển kỹ năng của bạn như một thợ săn chim bằng cách bắn hạ càng nhiều vịt càng tốt trong một khoảng thời gian giới hạn. Đây là một trong những cuộc phiêu lưu săn bắn trong rừng phổ biến nhất trên thế giới. Chúng tôi mang đến cho bạn những cuộc phiêu lưu bắn chim bay cực chất trong một môi trường rừng safari thực tế. Cảm giác như đang bắn chim như một thợ săn chuyên nghiệp. Đối với những người yêu thích cuộc phiêu lưu trong cuộc phiêu lưu, hãy trải nghiệm những con chim săn bắn trong trò chơi mô phỏng này.",
    link: "https://codepen.io/elad2412/full/DBeNNZ",
  },
  {
    id: 3,
    release: "2021-06-01",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041403433091092/giai-do-kinh-di.png?width=1321&height=618",
    caption: "Giải đố kinh dị",
    description:
      "Firework là game giải đố kinh dị lấy cảm hứng từ phương Đông. Cũng giống như Detention, trò chơi này sẽ mang đến một cốt truyện đầy ám ảnh và bầu không khí rùng rợn khó quên. Câu chuyện của Firework diễn ra tại một ngôi làng ở vùng núi hẻo lánh. Một vụ hỏa hoạn ngẫu nhiên tại một đám tang buộc cảnh sát phải điều tra lại một vụ án thảm sát khép kín. Lin Lixun, một cảnh sát tân binh, tình cờ tham gia cuộc điều tra này. Khi vụ việc được đào sâu hơn, quá khứ của các nạn nhân dần lộ diện. Tuy nhiên, vụ việc lại càng trở nên phức tạp hơn. Đây là một hiện tượng siêu nhiên, hay một vụ giết người được dàn dựng công phu? Hãy tự mình tìm ra câu trả lời trong Firework! Trải nghiệm môi trường u ám và ớn lạnh của làng quê Trung Quốc. Đồ họa phong cách màu nước hoài cổ cùng bầu không khí ảm đạm sẽ gợi nhớ lại những bộ phim kinh dị vào ban đêm. Bước vào cuộc khám phá ly kỳ và rùng rợn, trong đó bạn sẽ theo dõi theo các nhân vật chính để khám phá sự thật đằng sau thảm kịch. Trải nghiệm một câu chuyện mang tính huyền bí và hiện thực của phương Đông. Cách kể chuyện tinh tế khiến những lớp màn bí ẩn chồng chất lên nhau. Mỗi nhân vật trong game đều đóng vai trò quan trọng. Bạn sẽ làm quen với họ, hiểu họ, chia sẻ niềm vui và nỗi buồn cùng họ. Trò chơi kết hợp lối chơi giải đố và kể chuyện một cách hiệu quả để làm câu chuyện trở nên thú vị hơn.",
    link: "https://codepen.io/jcoulterdesign/full/WNxjVbW",
  },
  {
    id: 4,
    release: "2019-16-05",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041373582258196/doan-hinh-giong-nhau.png?width=1348&height=618",
    caption: "Tìm hình giống nhau",
    description:
      "Game chọn hinh giống nhau là game rèn luyện trí nhớ rất hay và được nhiều bạn trẻ chơi nhất hiện nay. Khả năng ghi nhớ thông tin tốt, tập trung cao độ cần có sự luyện tập trong nhiều tình huống và trong một khoảng thời gian nhất định. Có nhiều cách để luyện tập, giờ đây bạn có thể vừa giải trí, vừa rèn luyện trí não với tựa game chọn hình giống nhau. Người chơi sẽ cảm thấy hứng thú với mỗi cấp độ của tựa game, chinh phục những cấp độ cao giúp tăng khả năng ghi nhớ, tập trung. Hãy tham gia chơi game chọn hình giống nhau để có những giây phút thư giãn cùng lợi ích mà tựa game này đem lại cho chúng ta. Game tìm hình giống nhau là một trò chơi trí tuệ, có tính giải trí nhẹ nhàng. Người chơi sẽ liên tục lật mở các ô hình trong một khoảng thời gian cho phép, tìm những ô hình có đặc điểm giống nhau. Để chơi trò chơi game chọn hình giống nhau, bạn cần lật mở các ô hình và ghi nhớ các đặc điểm của hình ảnh có trong ô hình. Sau khi lật mở các ô, bạn cần nhớ các ô hình có đặc điểm giống nhau, ở vị trí nào, sau đó lật hai ô hình có điểm giống nhau liên tục, hai ô hình sẽ tự động biến mất và bạn sẽ tiếp tục tìm các ô hình giống nhau khác. Trò chơi cứ thế tiếp diễn khi bạn thực hiện mở hết các ô hình. Cấp độ game tìm vật giống nhau sẽ được nâng lên khi bạn chinh phục được các thử thách.",
    link: "https://codepen.io/leemartin/full/VwQQVZQ",
  },
  {
    id: 5,
    release: "2018-10-11",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041372953116732/co-vua.png?width=1313&height=619",
    caption: "Cờ vua",
    description:
      "Cờ vua là một trò chơi chiến thuật dành cho hai người rất phổ biến. Để thắng ván cờ, bạn phải 'chiếu hết' đối thủ bằng cách di chuyển các quân cờ sao cho quân Vua của đối phương rơi vào thế đe doạ bị bắt và không thể hoá giải. Mặc dù có luật chơi khá dễ hiểu, nhưng môn cờ vua đòi hỏi phải có chiến thuật để đánh thắng một kỳ thủ có trình độ. Sau khi học các luật cơ bản và chơi các ván cờ luyện tập, bạn sẽ có thể thách thức những người chơi khác và chiến thắng! Trong nước đi đầu tiên, các quân Tốt có thể di chuyển tới trước 1 hoặc 2 ô. Sau nước đi đầu tiên, quân Tốt chỉ được đi từng ô một. Trong khi di chuyển quân, bạn cần quan sát xem đối thủ có thể bắt được quân của bạn ở lượt sau của họ không. Hãy bảo vệ quân của mình và cố gắng bắt quân của đối phương. Bạn chỉ có thể nhập thành khi quân Vua và quân Xe chưa di chuyển lần nào và giữa hai quân cờ phải là khoảng trống. Giữ 1 hoặc 2 quân Tốt ở giữa bàn cờ sao cho bạn vẫn có thể dùng các quân cờ mạnh hơn để tấn công.",
    link: "https://codepen.io/jakealbaugh/full/JjRGQPY",
  },
  {
    id: 7,
    release: "2016-12-01",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041404456517632/quay-so-trung-thuong.png?width=1339&height=619",
    caption: "Quay số trúng thưởng",
    description:
      "Quay số may mắn (trong bài viết đề cập tới) là minigame giúp doanh nghiệp tạo chiến dịch khuyến mại qua minigame vòng quay, từ đó thu thập mọi thông tin khách hàng mà bạn cần. Khi tạo minigame quay số, bạn có thể: Tạo một chiến dịch khuyến mại nhanh chóng.Chủ shop có thể tự tạo giải thưởng, chọn cách mà game hiển thị.Thu hút khách hàng hơn, gia tăng doanh số.Thu thập data của khách hàng dễ dàng hơn.",
    link: "https://codepen.io/AdrianSandu/embed/MyBQYz?height=538&theme-id=dark&default-tab=result",
  },
  {
    id: 8,
    release: "2021-09-13",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041403860942878/oan-tu-ti.png?width=1315&height=619",
    caption: "Oẳn tù tì",
    description:
      "Game oẳn tù tì chọc mông là trò chơi dân gian Việt Nam xoay quanh trò chơi tranh đấu đầy thú vị. Oẳn tù tì chọc mông là một trò chơi dân gian phân tranh thắng thua đã có từ rất lâu rồi, hầu như ai trong số chúng ta cũng đều trải qua tuổi thơ chơi oẳn tù tì. Hãy cùng đến với phiên bản mới của trò chơi oẳn tù tì chọc mông vô cùng hấp dẫn tại Game24h để một lần nữa chiến thắng trong game oẳn tù tì chọc mông các bạn nhé! Chơi game oẳn tù tì chọc mông rất đơn giản, người chơi sẽ lựa chọn một chiến thuật ra các quân KÉO - BÚA - LÁ. Mỗi quân bài lại khắc chế lẫn nhau, ai ra quan bài khắc chế được quân bài đối phương người ấy sẽ dành chiến thắng màn chơi!  Phần thưởng dành cho người chiến thắng trong game oẳn tù tì chọc mông đó là chọc mông người thua! WOw, nghĩ thôi cũng thấy thốn rồi đó! Chúc các bạn sẽ trở thành người thắng cuộc nhé! ",
    link: "https://codepen.io/alvaromontoro/full/BaaBYyz",
  },
  {
    caption: "Gắp bóng",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041374681153546/gap-bong.png?width=1330&height=618",
    description:
      "Gắp bóng một trò chơi được các bạn trẻ vô cùng yêu thích tại các siêu thị và trung tâm mua sắm. Đến với game Gắp thu nhồi bông lần này, các bạn sẽ được gắp thú bông một cách hoàn toàn miễn phí mà không lo hết tiền. Cùng tham gia game và nhanh tay lấy cho mình những con thú bông đáng yêu nhé! Thu thập những sinh vật đồ chơi dễ thương nhất, đáng yêu nhất từ những quả trứng bất ngờ khi bạn cố gắng lấp đầy bộ sưu tập của mình. Thu thập tất cả! Mở khóa tất cả các sinh vật đồ chơi và một điều bất ngờ có thể ở trong cửa hàng dành cho bạn.",
    release: "2022-06-09",
    link: "https://codepen.io/jkantner/full/abOBdgV",
    id: 9,
  },
  {
    caption: "Thám hiểm",
    image:
      "https://media.discordapp.net/attachments/897437791867261012/988041404674613248/tham-hiem.png?width=1311&height=619",
    description:
      " Trò chơi kết hợp phiêu lưu với kiến thức khoa học để truyền đạt thông tin cho bé trong môi trường vừa học vừa chơi lý tưởng. Tại đây, bạn không chỉ có thể đắm mình vào thế giới bí ẩn thú vị mà còn nâng cấp kỹ năng du lịch của mình: nền văn minh đã mất này cần bạn có kiến ​​thức. Tất cả những gì bạn cần để tham gia hòn đảo hành trình này chỉ là ba lô của bạn - cuộc phiêu lưu đã chờ đợi bạn! Đi theo những con đường mòn của Atlantis và khám phá nền văn minh Atlantean với những nhà thám hiểm đầy tham vọng Robert và Nicole! Liệu họ có gặp gỡ cuộc sống bộ lạc nào đó của người Atlantean? Liệu họ có tự mình xây dựng & khôi phục một thị trấn ma thuật cổ đại không? Hãy đến và giúp họ! Trong bất kỳ trò chơi nông trại & phiêu lưu nào, trại, thức ăn và dụng cụ quan trọng nhất. Thiết lập trang trại của bạn, xây dựng nhà máy và bắt đầu khai thác tài nguyên! Những cuộc phiêu lưu theo phong cách odyssey thú vị và phức tạp hơn bạn có thể tưởng tượng! Làm ruộng, trồng trọt, thu hoạch thu hoạch của riêng bạn chỉ là một phần nhỏ trong cuộc phiêu lưu trên hòn đảo bị mất tích này!",
    release: "2022-06-09",
    link: "https://codepen.io/jcoulterdesign/full/NOMeEb",
    id: 10,
  },
];
const generatePersonsData = (number) => {
  const persons = [];
  while (number >= 0) {
    persons.push({
      id: number,
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    number--;
  }
  return persons;
};

const person = generatePersonsData(10);
// console.log(person);

fs.writeFileSync(
  "./db.json",
  JSON.stringify({ users: person, games: ListGame })
);
