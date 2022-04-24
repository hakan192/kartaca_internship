FROM golang:latest
ADD . /web
WORKDIR /web
RUN go env -w GO111MODULE=off
RUN go get go.mongodb.org/mongo-driver/mongo
COPY main.go ./ 
RUN go build -o /go_app
CMD ["/go_app"]