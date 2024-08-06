import { AtSign, Calendar, Heart, MessageCircle } from "lucide-react";

import { CardBody, CardContainer, CardItem } from "@atoms/3d-card";

import FormatDate from "@utils/formatter-date";

export default function PhotoCard({ data }: { data: PhotoDetails }) {
  if (!data) return;

  const { link, upvotes, comentarios, imagens, criadoEm, metadados } = data;
  const hasUsersMention = !!metadados?.users_in_photo.length;

  return (
    <CardContainer className="w-full">
      <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-full h-auto rounded-xl p-4 border  ">
        <CardItem translateZ="80" className="w-full">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img className="size-full aspect-square object-cover rounded-md" src={imagens.resolucaoMedia.url} alt="Instagram " />
          </a>

          {hasUsersMention && (
            <CardItem translateZ="20" className="group absolute top-2 right-2 grid place-items-end gap-2" data-testid="user-mentions-container">
              <div className="p-2 bg-gray-50 rounded-full">
                <AtSign className="size-4" />
              </div>

              <div className="bg-white shadow-lg p-2 opacity-0 w-0 overflow-hidden rounded-md -translate-y-1.5 transition-transform group-hover:w-max group-hover:opacity-100 group-hover:translate-y-0" data-testid="user-mentions">
                {metadados.users_in_photo.map((user) => (
                  <p key={user.user.username} className="text-sm select-none" data-testid={`user-mention-${user.user.username}`}>
                    &#64;{user.user.username}
                  </p>
                ))}
              </div>
            </CardItem>
          )}
        </CardItem>

        <div className="flex flex-wrap gap-2 px-2 justify-between items-center mt-4">
          <CardItem translateZ="20" className="flex gap-2 items-center">
            <Heart className="size-4" />
            <p className="text-xs truncate font-normal">{upvotes}</p>
          </CardItem>

          <CardItem translateZ="20" className="flex gap-2 items-center">
            <MessageCircle className="size-4" />
            <p className="text-xs truncate font-normal">{comentarios}</p>
          </CardItem>

          <CardItem translateZ="20" className="flex gap-2 items-center">
            <Calendar className="size-4" />
            <p className="text-xs truncate font-normal">{FormatDate(criadoEm)}</p>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
